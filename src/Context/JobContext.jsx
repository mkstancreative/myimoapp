import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";

const JobContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasFetchedJobs = useRef(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const jobsResponse = await fetch("https://67a21f98409de5ed5254601b.mockapi.io/jobs");

      if (!jobsResponse.ok) {
        throw new Error("Jobs Failed to Fetch");
      }
      const data = await jobsResponse.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedJobs.current) {
      hasFetchedJobs.current = true;
      fetchJobs();
    }
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading, error, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobContext);

  
};