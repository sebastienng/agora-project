import { Form, Formik, ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import Paginations from "./Paginations";
import "./StepThree.css";

import * as Yup from "yup";
import { jobList } from "../../utils/jobsList";

const StepThree = ({ title, currentStep, handleSteps }) => {
  const [updatedList, setList] = useState(jobList);
  const initialValues = {
    jobChecked: [],
  };
  const schemaFormValidation = Yup.object().shape({
    jobChecked: Yup.array()

      .min(1, "You need to select one job category")

      .max(1, "You can only select one jon category")

      .required("Required"),
  });

  function onSubmit(values) {
    const data = JSON.stringify(values, null, 2);
    console.log(values);
    // data = {
    //   "firstName": "sdcqds",
    //   "lastName": "dcsdqc",
    //   "email": "csdcsd@dql.com",
    //   "password": "dqscsdx",
    //   "newsLetter": true
    // }

    // axios.post(" https://alunmi-agora-backend.herokuapp.com/api/signup",data).then(id=>);
    handleSteps();
  }
  function handleSearch(event) {
    // event.preventDefault();
    // setList(jobList.filter((job) =>
    //   jobs.match(new RegExp(searchQuery, `gi`))
    // );
  }
  const [isChecked, setChecked] = useState([false, false, false, false]);

  function handleClick(index) {
    const updatedCheckedState = isChecked.map((item, i) =>
      i === index ? !item : item
    );
    setChecked(updatedCheckedState);
  }

  return (
    <div className="step-container">
      <h2>What's your job category ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
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
              {updatedList.map((element, index) => {
                return (
                  <>
                    <div key={"job" + index} className="job-category-box">
                      <label>
                        <div className="data-jobs">
                          <h3>{element.category}</h3>
                          <span>
                            {element.jobs.slice(0, 2).join(", ") + ", ..."}
                          </span>
                        </div>

                        <Field
                          name={"jobChecked"}
                          className={
                            isChecked[index]
                              ? "job-category-input  active"
                              : "job-category-input"
                          }
                          type="checkbox"
                          checked={isChecked[index]}
                          onClick={() => handleClick(index)}
                          value={element.category}
                        />
                      </label>
                    </div>
                  </>
                );
              })}
              <ErrorMessage
                component={"div"}
                className="error-message"
                name="jobChecked"
              />
            </div>
          </div>

          <div className="footer-form">
            <button type="submit" className="agora-button">
              Continue
            </button>
            <span>Your job field isn’t listed here?</span>
            <Paginations currentStep={currentStep} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepThree;
