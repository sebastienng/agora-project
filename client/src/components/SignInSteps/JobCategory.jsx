import { Field, ErrorMessage } from "formik";
import React from "react";
import { useState } from "react";
import ToolTip from "../ToolTip";
import "./JobCategory.css";

const JobCategory = ({ category, jobs, id }) => {
  const [isActive, setActive] = useState();

  function handleClick() {
    setActive(!isActive);
  }
  return (
    <div
      className={isActive ? "job-category-box  active" : "job-category-box "}
    >
      <label>
        <div className="data-jobs">
          <h3>{category}</h3>
          <span>{jobs.slice(0, 2).join(", ") + ", ..."}</span>
        </div>

        <Field
          name={"jobChecked"}
          className={
            isActive ? "job-category-input active" : "job-category-input"
          }
          type="checkbox"
          onClick={handleClick}
          value={category}
        />
        <ErrorMessage component={ToolTip} name="jobChecked" />
      </label>
    </div>
  );
};

export default JobCategory;
