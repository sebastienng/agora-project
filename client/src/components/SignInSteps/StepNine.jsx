import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paginations from "./Paginations";
import ToolTip from "../ToolTip";

import './StepNine.css'

export default function StepNine({ currentStep, handleSteps }) {
  const countryExemple = ['china', 'france', 'usa']; 
  
  const initialValues = { country: "" };
  const onSubmit = (values) => {
    // const data = JSON.stringify(values, null, 2);
    //Axios patch (data)
    handleSteps();
  };
  const validate = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = "Required";
    }
    console.log(values);

    return errors;
  };
  return (
    <div className="locationContainer">
      <h2>Where are you located ?</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <Field id="country" name="country" placeholder="Country"></Field>
          <ErrorMessage component={ToolTip} name="country"></ErrorMessage>

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
