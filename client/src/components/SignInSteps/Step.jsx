import { Form, Formik } from "formik";
import React from "react";
import Paginations from "./Paginations";
import "./Step.css";
import Three from "./StepThree/Three";

const Step = ({ title, currentStep, handleSteps }) => {
  function renderForm(currentStep) {
    switch (currentStep) {
      case 1:
        return "Step 1";
      case 2:
        return "Step 1";
      case 3:
        return <Three />;
      case 4:
        return "Step 1";
      default:
        return "This step does not exist.";
    }
  }

  function handleSubmit() {
    handleSteps();
  }
  return (
    <div className="step-container">
      <h2>{title}</h2>

      <Formik>
        <div>
          <Form className="steps-form" onSubmit={handleSubmit}>
            {renderForm(currentStep)}

            <div className="footer-form">
              <button type="submit" className="agora-button">
                Continue
              </button>
              <span>Your job field isn’t listed here?</span>
              <Paginations currentStep={currentStep} />
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Step;
