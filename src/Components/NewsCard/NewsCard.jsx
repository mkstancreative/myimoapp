import React from "react";
import { useNews } from "../../Context/NewsContext";

function NewsCard() {
  const { news } = useNews();

  return (
    <>
      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <img src={newsItem.img} alt="image" />
          <span>{newsItem.title}</span>
        </div>
      ))}
    </>
  );
}

export default NewsCard;
