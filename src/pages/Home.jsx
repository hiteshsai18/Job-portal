import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import jobsData from "../data/jobs";

import JobCard from "../components/JobCard";

function Home() {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      navigate("/login");
    }

    setJobs(jobsData);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="heading">
        Jobs Available
      </h2>

      <input
        type="text"
        placeholder="Search jobs"
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Home;