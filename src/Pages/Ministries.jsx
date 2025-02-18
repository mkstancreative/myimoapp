import React, { useState } from "react";
import HeroSection from "../data/HeroSection";
import { NewsProvider } from "../Context/NewsContext";
import MinistryNewsCard from "../Components/MinistryNewsCard/MinistryNewsCard";

function Ministries() {
  const [activeTab, setActiveTab] = useState(["ministry"]);
  return (
    <>
      <HeroSection pageType="ministries" />
      <main>
        <section className="about-directory-section">
          <h1>About the Directory</h1>
          <p>
            The Ministries and Parastatals Directory is a comprehensive resource
            designed to bridge citizens and <br />
            governmental services. Access up-to-date information on ministry
            contacts, descriptions, and the services <br />
            they provide—all in one place.
          </p>

          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab == "ministry" ? "active" : ""}`}
                onClick={() => setActiveTab("ministry")}
              >
                Ministries 1
              </button>
              <button
                className={`tab-btn ${
                  activeTab == "parastatals" ? "active" : ""
                }`}
                onClick={() => setActiveTab("parastatals")}
              >
                Parastatals 2
              </button>
            </div>
            <div className="tab-content">
              {activeTab == "ministry" && (
                <div id="tab1" className="content active">
                  <h2>Ministries</h2>
                  <NewsProvider>
                    <MinistryNewsCard category="ministry" />
                  </NewsProvider>
                </div>
              )}
              {activeTab == "parastatals" && (
                <div id="tab2" className="content active">
                  <h2>Parastatals</h2>
                  <NewsProvider>
                    <MinistryNewsCard category="parastatals" />
                  </NewsProvider>
                </div>
              )}
            </div>
            <div className="pagination">
              <ul>
                <li>&lt;</li>
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
                <li>4</li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Ministries;
