import React from "react";
import Three from "./Three";

const Step = ({ title, currentStep }) => {
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
  return (
    <div className="stepOneContainer">
      <h2>{title}</h2>
      <div className="buttonContainer">
        <form className="steps-form">{renderForm(currentStep)}</form>
      </div>
    </div>
  );
};

export default Step;
