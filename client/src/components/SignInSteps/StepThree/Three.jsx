import React from "react";
import "./Three.css";
import JobCategory from "../JobCategory";
import { jobList } from "../../../utils/jobsList";
const Three = () => {
  return (
    <div className="form-job-category">
      <div className="search-bar">
        <label htmlFor="search-job-category">Search job</label>
        <input
          placeholder="Data analyst, Web developper, ..."
          name="search-job-category"
        />
      </div>

      <div className="list-job-category">
        {jobList.map((element, i) => {
          return (
            <JobCategory
              key={"job-" + i}
              category={element.category}
              jobs={element.jobs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Three;
