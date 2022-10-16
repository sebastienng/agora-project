import React from "react";
import JobTitle from "../JobTitle";
import "./Four.css";
import { jobList } from "../../../utils/jobsList";

const Four = () => {
  return (
    <div className="form-job-title">
      {jobList[2].jobs.sort().map((job, i) => {
        return <JobTitle key={"job-" + i} job={job} />;
      })}
    </div>
  );
};

export default Four;
