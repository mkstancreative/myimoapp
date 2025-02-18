import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [sportsNews, setSportNews] = useState([]);
  const [govtNews, setGovtNews] = useState([]);
  const [error, setError] = useState([]);
  const [resource, setResource] = useState([]);
  const [resource2, setResource2] = useState([]);
  const [ministry, setMinistry] = useState([]);
  const hasFetchedNews = useRef(false);

  const handleGeneralNews = async () => {
    try {
      const newsResponse = await fetch(
        "https://67b4719c392f4aa94faadf62.mockapi.io/news"
      );
      const newsData = await newsResponse.json();
      setNews(newsData);

      const resourceResponse = await fetch(
        "https://67b46ec0392f4aa94faad4bd.mockapi.io/resource"
      );
      const resourceData = await resourceResponse.json();
      setResource(resourceData);

      const resourceResponse2 = await fetch(
        "https://67b46ec0392f4aa94faad4bd.mockapi.io/resource2"
      );
      const resourceData2 = await resourceResponse2.json();
      setResource2(resourceData2);

      const sportResponse = await fetch(
        "https://67b4719c392f4aa94faadf62.mockapi.io/sport_news"
      );
      const sportData = await sportResponse.json();
      setSportNews(sportData);

      const govtNewsResponse = await fetch(
        "https://67b4734c392f4aa94faae7b2.mockapi.io/govt_news"
      );
      const govtNewsData = await govtNewsResponse.json();
      setGovtNews(govtNewsData);

      const ministryResponse = await fetch(
        "https://67b4734c392f4aa94faae7b2.mockapi.io/ministry"
      );
      const ministryData = await ministryResponse.json();
      setMinistry(ministryData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!hasFetchedNews.current) {
      hasFetchedNews.current = true;
      handleGeneralNews();
    }
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        sportsNews,
        govtNews,
        error,
        resource,
        resource2,
        ministry,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  return useContext(NewsContext);
};
