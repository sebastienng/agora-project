import React from "react";
import "./JobCategory.css";

const JobCategory = ({ category, jobs, key }) => {
  console.log(jobs);
  return (
    <div className="job-category-box">
      <h3>{category}</h3>
      <span>{jobs.slice(0, 2).join(", ") + ", ..."}</span>
    </div>
  );
};

export default JobCategory;
