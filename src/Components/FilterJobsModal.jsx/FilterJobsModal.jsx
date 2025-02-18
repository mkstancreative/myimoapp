import React from "react";
import "./FilterJobsModal.css";

function FilterJobsModal({ filterJobs, handleFilterJobs }) {
  return (
    <div
      className={`filter-modal ${filterJobs ? "show" : ""}`}
      id="filterModalOverlay"
    >
      <div className="filter-modal-block">
        <div>
          <h3>Filter</h3>
        </div>
        <div className="hline"></div>
        <form action="">
          <div className="filter-block1">
            <div className="filter-salary">
              <h3>Salary</h3>
              <span>Monthly</span>
              <span>Year</span>
              <label className="radio-container">
                Any
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                &RightAngleBracket; 3000k
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                &RightAngleBracket; 5000k
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                &RightAngleBracket; 8000k
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                &RightAngleBracket; 10000k
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="filter-location">
              <h3>Location</h3>
              <label className="radio-container">
                On Site
                <input type="radio" name="location" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Remote Jobs
                <input type="radio" name="location" value="1" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="filter-date">
              <h3>Date of Posting</h3>
              <label className="radio-container">
                All Time
                <input type="radio" name="dpostings" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Last 24 Hours
                <input type="radio" name="dpostings" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Last 3 Days
                <input type="radio" name="dpostings" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Last 7 Days
                <input type="radio" name="dpostings" value="1" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="hline"></div>
          <div className="filter-block1">
            <div className="filter-salary">
              <h3>Work Experience</h3>
              <label className="radio-container">
                Any Experience
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Internship
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                Work Remotely
                <input type="radio" name="salary" value="1" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="filter-location">
              <h3>Type Of Employment</h3>
              <label className="checkbox-container">
                On Site
                <input type="checkbox" name="option1" />
                <span className="checkmarkbox"></span>
              </label>
              <label className="checkbox-container">
                Remote Jobs
                <input type="checkbox" name="option2" />
                <span className="checkmarkbox"></span>
              </label>
            </div>
            <div className="filter-state">
              <h3>State of Posting</h3>
              <select name="" id="">
                <option value="imo1">Imo</option>
                <option value="imo1">Imo</option>
                <option value="imo1">Imo</option>
              </select>
            </div>
          </div>

          <div className="filter-btn">
            <button type="reset" onClick={handleFilterJobs}>
              Reset Filter
            </button>
            <button type="submit">Apply Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterJobsModal;
