import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <Link to={`/job/${job.id}`}>
        <button className="job-btn">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default JobCard;