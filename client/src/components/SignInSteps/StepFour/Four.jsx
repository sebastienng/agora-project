import React from "react";
import JobTitle from "../JobTitle";
import "./Four.css";
import { jobList } from "../../../utils/jobsList";

const Four = () => {
  return (
    <div className="form-job-title">
      {jobList[2].jobs.sort().map((job, i) => {
        return (
          <div className="job-box">
            <label htmlFor={job}>{job}</label>
            <input type={"checkbox"} name={job} />
          </div>
        );
      })}
    </div>
  );
};

export default Four;
