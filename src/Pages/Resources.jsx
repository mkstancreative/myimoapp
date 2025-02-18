import React, { useState } from "react";
import HeroSection from "../data/HeroSection";
import "./Assets/CSS/Style.css";
import { NewsProvider } from "../Context/NewsContext";
import ResourceCard2 from "../Components/ResourceCard2/ResourceCard2";
import searchIcon from "../Components/Assets/icons/search.svg";
import LoginModal from "../Components/LoginModal/LoginModal";

function Resources({ isOpenModal, handleModal }) {
  return (
    <>
      <HeroSection pageType="resources" />

      <section className="search-section">
        <div className="search">
          <form action="">
            <div className="form-group">
              <span>
                <img src={searchIcon} alt="search" />
              </span>
              <input type="text" placeholder="News Title, keywords......" />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="search-filter">
            <h4>Filter</h4>
            <select>
              <option value="technology">Newest</option>
              <option value="technology">Newest</option>
              <option value="technology">Newest</option>
            </select>
          </div>
        </div>
      </section>

      <LoginModal
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        pageModal="digital"
      />

      <section className="main-story-section">
        <div className="story-topics" data-aos="fade-right">
          <h1>Topics</h1>
          <div>
            <a href="#" className="active-topics">
              All Pulications
            </a>
            <a href="#">Architecture & Civil Engineering</a>
            <a href="#">Architecture & Civil Engineering</a>
          </div>
        </div>
        <div className="story-list" data-aos="fade-up">
          <NewsProvider>
            <ResourceCard2 handleModal={handleModal} />
          </NewsProvider>
        </div>
      </section>
    </>
  );
}

export default Resources;
