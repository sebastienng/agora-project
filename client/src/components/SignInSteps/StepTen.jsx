import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paginations from "./Paginations";
import ToolTip from "../ToolTip";

import "./StepTen.css";

export default function StepTen({ currentStep, handleSteps }) {

  const initialValues = { dailyRate: "" };
  const onSubmit = (values) => {
    // const data = JSON.stringify(values, null, 2);
    //Axios patch (data)
    handleSteps();
  };
  const validate = (values) => {
    const errors = {};
    if (!values.dailyRate) {
      errors.dailyRate = "Required";
    }
    return errors;
  };
  const dailyRateButton = (values) => {values++};
  
  return (
    <div className="dailyRateContainer">
      <h2>What is your daily rate? </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        setFieldValue={() => dailyRateButton()}
      >
        <Form>
          <div className="dailrateInput">
            <button onClick={() => dailyRateButton}>-</button>
            <Field
              type="number"
              id="dailyRate"
              name="dailyRate"
              placeholder="€"
              step={50}
              min={1}
              max={10000}
            />
            <button onClick={() => dailyRateButton}>+</button>
            <ErrorMessage component={ToolTip} name="dailyRate"></ErrorMessage>
          </div>
          <p>You will be able to change your rate later on in your profile. </p>
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
}
