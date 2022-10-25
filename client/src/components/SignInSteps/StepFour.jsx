import { Form, Formik, ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import Paginations from "./Paginations";
import "./StepFour.css";

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

    handleSteps();
  }

  console.log(jobList);
  return (
    <div className="step-container">
      <h2>What's your job title ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
          <div id="checkbox-group" className="form-job-title">
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className="list-job-title"
            >
              {jobList[2].jobs.sort().map((element, index) => {
                return (
                  <>
                    <div key={"job-title" + index} className="job-box">
                      <label>{element}</label>
                      <Field
                        name={"jobTitleChecked"}
                        type="checkbox"
                        value={element}
                      />
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
