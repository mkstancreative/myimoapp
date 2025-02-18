import React from "react";
import searchIcon from "../Assets/icons/search.svg";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero({
  title,
  description,
  image,
  heroBtn,
  bgImage,
  hasForm,
  hero_image_alt,
}) {
  const heroStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // transition: "all 1s ease-in-out",
  };

  const heroBtnStyles = ["hero-block-btn1", "hero-block-btn2"];

  return (
    <div
      className={bgImage ? "hero2" : "hero"}
      style={bgImage ? heroStyle : {}}
    >
      <div className={bgImage ? "hero-block-b" : "hero-block1"}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{description}</p>
        {heroBtn && heroBtn.length > 0 && (
          <>
            {heroBtn.map((btn, index) => {
              return (
                <Link
                  key={index}
                  className={heroBtnStyles[index % heroBtnStyles.length]}
                >
                  {btn}
                </Link>
              );
            })}
          </>
        )}

        {hasForm && (
          <div className="hero_form">
            <img src={searchIcon} alt="Search" />
            <form action="">
              <input
                type="text"
                placeholder="government ministries and departments, keywords"
              />
              <button>Search</button>
            </form>
          </div>
        )}
      </div>
      <div className="hero-block2">
        {image && <img src={image} alt={hero_image_alt} />}
      </div>
    </div>
  );
}

export default Hero;
