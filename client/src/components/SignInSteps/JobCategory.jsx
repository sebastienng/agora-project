import { Field } from "formik";
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
      role="group"
      aria-labelledby=""
      className={isActive ? "job-category-box  active" : "job-category-box "}
    >
      <label>
        <div className="data-jobs">
          <h3>{category}</h3>
          <span>{jobs.slice(0, 2).join(", ") + ", ..."}</span>
        </div>

        <Field
          className={
            isActive ? "job-category-input active" : "job-category-input"
          }
          type="checkbox"
          onClick={handleClick}
          value={category}
        />
      </label>
    </div>
  );
};

export default JobCategory;
