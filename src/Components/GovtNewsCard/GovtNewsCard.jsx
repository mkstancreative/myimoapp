import React from "react";
import { useNews } from "../../Context/NewsContext";

function GovtNewsCard() {
  const { govtNews } = useNews();
  return (
    <>
      {govtNews.map((govtNewsItem) => (
        <div key={govtNewsItem.id}>
          <div>
            <img src={govtNewsItem.img} alt="govt Image" />
          </div>
          <h2>{govtNewsItem.title}</h2>
          <p>{govtNewsItem.description}</p>
        </div>
      ))}
    </>
  );
}

export default GovtNewsCard;
