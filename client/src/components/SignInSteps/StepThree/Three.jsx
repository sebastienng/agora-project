import React from "react";
import "./Three.css";
import JobCategory from "../JobCategory";
import { jobList } from "../../../utils/jobsList";
import { useState } from "react";
import { Field } from "formik";
const Three = () => {
  const [updatedList, setList] = useState(jobList);

  function handleSearch(event) {
    // event.preventDefault();
    // setList(jobList.filter((job) =>
    //   jobs.match(new RegExp(searchQuery, `gi`))
    // );
  }
  return (
    <div className="form-job-category">
      <div className="search-bar">
        <label htmlFor="search-job-category">Search job</label>
        <Field
          placeholder="Data analyst, Web developper, ..."
          name="search-job-category"
          onChange={handleSearch}
        />
      </div>

      <div className="list-job-category">
        {updatedList.map((element, i) => {
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
