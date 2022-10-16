import React from "react";
import "./JobTitle.css";

const JobTitle = ({ job }) => {
  return (
    <div className="job-box">
      <label htmlFor={job}>{job}</label>
      <input type={"checkbox"} name={job} />
    </div>
  );
};

export default JobTitle;
