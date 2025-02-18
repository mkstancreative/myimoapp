import React from "react";
import { useNews } from "../../Context/NewsContext";

function ResourceCard1({handleModal}) {
  const { resource } = useNews();
  return (
    <>
      {resource.map((resItems) => (
        <div key={resItems.id} onClick={handleModal}>
          <div>
            <img src={resItems.img} alt="" />
          </div>
          <p>{resItems.title}</p>
          <h5>{resItems.sub_title}</h5>
        </div>
      ))}
    </>
  );
}

export default ResourceCard1;
