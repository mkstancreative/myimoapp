import React, { useState } from "react";
import HeroSection from "../data/HeroSection";
import "./Assets/CSS/Main.css";
import searchIcon from "../Components/Assets/icons/search.svg";
import { NewsProvider } from "../Context/NewsContext";
import ResourceCard1 from "../Components/ResourceCard1/ResourceCard1";
import LoginModal from "../Components/LoginModal/LoginModal";

function DigitalLiteracy({ isOpenModal, handleModal }) {

  return (
    <>
      <HeroSection pageType="digital_literacy" />

      <section className="search-section_digital">
        <div className="search_digital">
          <form action="">
            <div className="form-group">
              <span>
                <img src={searchIcon} alt="search" />
              </span>
              <input type="text" placeholder="Job Title, Keywords....." />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="search-category_digital">
            <h4>Category</h4>
            <select>
              <option value="technology">Technology</option>
              <option value="technology">Technology</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div className="search-filter_digital">
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

      <section className="resource_section">
        <h1 data-aos="fade-right">Resource</h1>
        <div className="resource_block" data-aos="fade-up">
          <NewsProvider>
            <ResourceCard1 handleModal={handleModal} />
          </NewsProvider>
        </div>
      </section>
    </>
  );
}

export default DigitalLiteracy;
