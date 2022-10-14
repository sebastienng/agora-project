import React from "react";
import "./JobCategory.css";

const JobCategory = ({ category, jobs }) => {
  console.log(jobs);
  return (
    <div className="job-category-box">
      <h3>{category}</h3>
      <span>{jobs.join(", ")}</span>
    </div>
  );
};

export default JobCategory;
