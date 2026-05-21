import { useParams, Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      navigate("/login");
    }
  }, []);

  const job = jobs.find((job) => job.id === Number(id));

  return (
    <div className="container">
      <div className="details-card">
        <h2>{job.title}</h2>

        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>Description:</strong> {job.description}
        </p>

        <Link to={`/apply/${job.id}`}>
          <button>
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;