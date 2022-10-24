import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paginations from './Paginations'
import ToolTip from '../ToolTip'

import './StepEight.css'


function StepEight({ handleSteps, currentStep }) {
  const initialValues = { pitchBio: "" };
  const onSubmit = (values) => {
    const data = JSON.stringify(values, null, 2);
    //Axios patch (data)
    handleSteps();
  };
  const validate = (values) => {
    const errors = {};
    if (!values.pitchBio) {
      errors.pitchBio = "Required";
    }
    return errors;
  };

  return (
    <div className="personBioContainer">
      <h2>Tell us about yourself</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <label htmlFor="pitchBio">
            Write a short bio to introduce yourself
          </label>
          <Field
            id="pitchBio"
            as="textarea"
            name="pitchBio"
            placeholder="Ex: My name is ... I’ve been Product Designer for 5 years...."
          ></Field>
          <ErrorMessage component={ToolTip} name="pitchBio" />

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

export default StepEight;
