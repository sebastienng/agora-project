import React from "react";
import { useState } from "react";
import "./JobCategory.css";

const JobCategory = ({ category, jobs }) => {
  const [isActive, setActive] = useState();

  function handleClick() {
    setActive(!isActive);
  }
  return (
    <div
      className={isActive ? "job-category-box active" : "job-category-box"}
      onClick={handleClick}
    >
      <h3>{category}</h3>
      <span>{jobs.slice(0, 2).join(", ") + ", ..."}</span>
    </div>
  );
};

export default JobCategory;
