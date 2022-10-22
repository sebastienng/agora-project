import { Form, Formik, ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import Paginations from "./Paginations";
import "./StepThree.css";

import * as Yup from "yup";
import { jobList } from "../../utils/jobsList";

const StepThree = ({ title, currentStep, handleSteps }) => {
  const [updatedList, setList] = useState(jobList);
  const initialValues = {
    jobTitleChecked: [],
  };
  const schemaFormValidation = Yup.object().shape({
    jobTitleChecked: Yup.array()

      .min(1, "You need to select at least one job")

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
      <h2>What's your job title ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
          <div className="form-job-title">
            <div className="list-job-category">
              {jobList[2].jobs.sort().map((element, index) => {
                return (
                  <>
                    <div key={"job-title" + index} className="job-box">
                      <label>
                        <Field
                          name={"jobTitleChecked"}
                          className={isChecked[index] ? " active" : ""}
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
                name="jobTitleChecked"
              />
            </div>
          </div>

          <div className="footer-form">
            <button type="submit" className="agora-button">
              Continue
            </button>
            <span>Your job isn’t listed here?</span>
            <Paginations currentStep={currentStep} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepThree;
