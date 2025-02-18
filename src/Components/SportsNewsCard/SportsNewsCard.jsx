import React from "react";
import { useNews } from "../../Context/NewsContext";

function SportsNewsCard() {
  const { sportsNews } = useNews();
  return (
    <>
      {sportsNews.map((sportItem) => (
        <div key={sportItem.id} data-aos="fade-left">
          <div>
            <img src={sportItem.img} alt="sports"/>
          </div>
          <h2>{sportItem.title}</h2>
          <p>
           {sportItem.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default SportsNewsCard;
