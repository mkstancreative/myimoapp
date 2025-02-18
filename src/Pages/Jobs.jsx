import React, { useCallback, useEffect, useState } from "react";
import "./Assets/CSS/Main.css";
import HeroSection from "../data/HeroSection";
import { JobsProvider } from "../Context/JobContext";
import JobCard from "../Components/JobCard.jsx/JobCard";
import filterIcon from "../Components/Assets/icons/filter.svg";
import searchIcon from "../Components/Assets/icons/search.svg";
import LoginModal from "../Components/LoginModal/LoginModal";
import FilterJobsModal from "../Components/FilterJobsModal.jsx/FilterJobsModal";

function Jobs({ isOpenModal, handleModal }) {
  const [activeTab, setActiveTab] = useState("govt");

  const [filterJobs, setFilterJobs] = useState(false);

  const handleFilterJobs = () => {
    setFilterJobs(!filterJobs);
  };

  const handleOutSideClickFilter = useCallback(
    (event) => {
      if (filterJobs && !event.target.closest(".filter-modal-block")) {
        setFilterJobs(false);
      }
    },
    [filterJobs]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClickFilter);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClickFilter);
    };
  }, [handleOutSideClickFilter]);

  return (
    <>
      <HeroSection pageType="jobs" />

      <section className="search_section_jobs">
        <div className="search_jobs">
          <form action="">
            <div className="form_group_jobs">
              <span>
                <img src={searchIcon} alt="search" />
              </span>
              <input type="text" placeholder="Job Title, Keywords....." />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="search_filter_jobs" onClick={handleFilterJobs}>
            <h4>Filter</h4>
            <span>
              <img src={filterIcon} alt="filter" />
            </span>
          </div>
        </div>
        <div className="search_figure">
          <p>
            <b>1200</b> posted Jobs. <b>700</b> Private.
          </p>
          <div>
            <button
              onClick={() => setActiveTab("govt")}
              className={`${activeTab === "govt" ? "active" : ""}`}
            >
              Government Jobs
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`${activeTab === "private" ? "active" : ""}`}
            >
              Private Jobs
            </button>
          </div>
        </div>
      </section>

      <LoginModal
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        pageModal="alljobs"
      />

      <FilterJobsModal
        handleFilterJobs={handleFilterJobs}
        filterJobs={filterJobs}
      />

      <section className="jobs_section">
        {activeTab === "govt" && (
          <div className="jobs_block active">
            <JobsProvider>
              <JobCard category="govt" handleModal={handleModal} />
            </JobsProvider>
          </div>
        )}
        {activeTab === "private" && (
          <div className="jobs_block active">
            <JobsProvider>
              <JobCard category="private" handleModal={handleModal} />
            </JobsProvider>
          </div>
        )}
      </section>
    </>
  );
}

export default Jobs;
