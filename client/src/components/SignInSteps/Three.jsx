import React from "react";
import JobCategory from "./JobCategory";
import { jobList } from "../../utils/jobsList";
const Three = () => {
  return (
    <div>
      <label htmlFor="search-job-bar">Search job</label>
      <input placeholder="Data analyst, Web developper, ..." />
      {jobList.map((element) => {
        return <JobCategory category={element.category} jobs={element.jobs} />;
      })}
      ;
    </div>
  );
};

export default Three;
