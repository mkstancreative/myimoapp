import React from "react";
// import Hero from "../Components/Hero/Hero";
import ArrowUp from "../Components/Assets/icons/arrow-up-black.svg";
// import "./Assets/CSS/News.css";
import HeroSection from "../data/HeroSection";
import { Link } from "react-router-dom";
import { NewsProvider } from "../Context/NewsContext";
import "./Assets/CSS/Main.css";
import Img39 from "./Assets/others/img39.png";
import NewsCard from "../Components/NewsCard/NewsCard";
import SportsNewsCard from "../Components/SportsNewsCard/SportsNewsCard";
import GovtNewsCard from "../Components/GovtNewsCard/GovtNewsCard";

function News() {
  return (
    <div>
      <HeroSection pageType="news" />
      <main>
        <section className="news_portal_section">
          <div className="news_portal">
            <h1 className="news_portal_title">News Portal</h1>
          </div>
          <div className="news_portal2">
            <NewsProvider>
              <NewsCard />
            </NewsProvider>
          </div>
        </section>
        <section className="impact-stories">
          <div className="impact-stories-block1">
            <button>Stay Up to Date</button>
            <h1>
              Our Latest <br />
              Impact Stories
            </h1>
            <p>
              Stay informed about the strides we’re making toward <br />
              building stronger, more resilient communities. From new <br />
              program launches to inspiring success stories, explore how <br />
              our efforts—and your support—are creating real change.
            </p>
            <div>
              <img src={Img39} alt="people" />
            </div>
          </div>
          <div className="impact-stories-block2">
            <Link to="#">
              <p>Cost of living projected to improve</p>
              <p>
                Our latest program has provided over 200 families with safe and
                <br />
                affordable housing solutions. Read more about how we’re making
                <br />
                housing accessible.
              </p>
              <img src={ArrowUp} alt="arrow-up" />
            </Link>
            <Link to="#">
              <p>Job Training Program Graduation</p>
              <p>
                Celebrate with our recent graduates who have completed our job
                training and placement program, achieving a new level of
                stability.
              </p>
              <img src={ArrowUp} alt="arrow-up" />
            </Link>
            <Link to="#">
              <p>Job Training Program Graduation</p>
              <p>
                Celebrate with our recent graduates who have completed our job
                training and placement program, achieving a new level of
                stability.
              </p>
              <img src={ArrowUp} alt="arrow-up" />
            </Link>
            <Link to="#">
              <p>Cost of living projected to improve</p>
              <p>
                Join us for a day of volunteering, fun activities, and community
                bonding. Open to all ages. Help us make this event impactful for
                everyone involved.
              </p>
              <img src={ArrowUp} alt="arrow-up" />
            </Link>
          </div>
        </section>

        <section className="latest-sports">
          <h1>Latest In Sports</h1>
          <div className="latest-sports-block">
            <NewsProvider>
              <SportsNewsCard />
            </NewsProvider>
          </div>
          <a href="#">See More</a>
        </section>
        <section className="government-news">
          <h1>Government News</h1>
          <div className="government-news-block">
            <NewsProvider>
              <GovtNewsCard />
            </NewsProvider>
          </div>
          <a href="#">See More</a>
        </section>
      </main>
    </div>
  );
}
export default News;
