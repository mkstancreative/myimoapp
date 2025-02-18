import React from "react";
import { useNews } from "../../Context/NewsContext";
import vector5 from "../Assets/icons/Vector5.svg";
import imoLogo3 from "../Assets/logo/imo logo3.png";
import erosion from "../Assets/logo/erosion.png";
import { Link } from "react-router-dom";

function MinistryNewsCard({category}) {
  const { ministry } = useNews();

  const filteredMinistryNews = ministry.filter(
    (news) => news.category === category
  );
  return (
    <>
      {filteredMinistryNews.map((miniNews) => (
        <Link to="" className="ministry-block" key={miniNews.id}>
          <div>
            <img
              src={miniNews.category === "ministry" ? imoLogo3 : erosion}
              alt="Imo Logo"
            />
          </div>
          <h2>{miniNews.title}</h2>
          <div>
            <img src={vector5} alt="Vector" />
          </div>
        </Link>
      ))}
    </>
  );
}

export default MinistryNewsCard;
