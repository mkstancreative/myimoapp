import React from "react";
import { useJobs } from "../../Context/JobContext";
import imologo from "../Assets/logo/imo-logo.png";
import dangote from "../Assets/logo/dangote.png";

function JobCard({ category, handleModal }) {
  const { jobs, loading, error, fetchJobs } = useJobs();

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchJobs}>Retry</button>
      </div>
    );
  }

  const filteredJobs = jobs.filter((job) => job.category === category);

  return (
    <>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} onClick={handleModal}>
            <h3>Data Government</h3>
            <p>{job.ministry}</p>
            <h3>Category</h3>
            <p>{job.category}</p>
            <h3>Requirement</h3>
            <p>{job.requirement}</p>
            <h3>Salary</h3>
            <p>₦{job.salary}per annum</p>
            <h3>Deadline</h3>
            <p>{job.deadline}</p>
            <div>
              <img
                src={job.category === "govt" ? imologo : dangote}
                alt={job.category}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No category found</p>
      )}
    </>
  );
}
export default JobCard;
