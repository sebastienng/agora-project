import { Form, Formik, ErrorMessage, Field } from "formik";
import React from "react";
import Paginations from "./Paginations";
import "./StepSix.css";

import * as Yup from "yup";

const StepThree = ({ currentStep, handleSteps }) => {
  const years = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const initialValues = {
    yearsExperience: "-1",
  };
  const schemaFormValidation = Yup.object().shape({
    yearsExperience: Yup.number()

      .min(0, "Please select your years of experience using the dropdown menu")

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

  return (
    <div className="step-container">
      <h2>What's your experience ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
          <div className="form-year-xp">
            <Field
              className="select-experience"
              name="yearsExperience"
              as="select"
            >
              <option value={"-1"}>Years of experiences</option>
              {years.map((y) => {
                return (
                  <option value={y} key={y + "year"}>
                    {y > 1 ? y + " years" : y + " year"}
                  </option>
                );
              })}
            </Field>

            <ErrorMessage
              component={"div"}
              className="error-message"
              name="yearsExperience"
            />
          </div>

          <div className="footer-form">
            <button type="submit" className="agora-button">
              Continue
            </button>
            <Paginations currentStep={currentStep} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepThree;
