import React from "react";
import { useNews } from "../../Context/NewsContext";

function ResourceCard2({ handleModal }) {
  const { resource2 } = useNews();
  return (
    <>
      {resource2.map((resItems2) => (
        <div key={resItems2.id} onClick={handleModal}>
          <div>
            <img src={resItems2.img} alt="" />
          </div>
          <p>{resItems2.title}</p>
          <h5>{resItems2.sub_title}</h5>
        </div>
      ))}
    </>
  );
}

export default ResourceCard2;
