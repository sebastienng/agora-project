import React from "react";
import "./Step.css";
import Three from "./StepThree/Three";
import Four from "./StepFour/Four";

const Step = ({ title, currentStep }) => {
  const paginationList = [0, 1, 2, 3, 4, 5, 6, 7];
  function renderForm(currentStep) {
    switch (currentStep) {
      case 1:
        return "Step 1";
      case 2:
        return "Step 1";
      case 3:
        return <Three />;
      case 4:
        return <Four />;
      default:
        return "This step does not exist.";
    }
  }

  return (
    <div className="step-container">
      <h2>{title}</h2>
      <div className="">
        <form className="steps-form">{renderForm(currentStep)}</form>
      </div>
      <div className="footer-form">
        <button type="Submit" className="agora-button">
          Continue
        </button>
        {(currentStep === 3 || currentStep === 4) && (
          <span>
            Your job {currentStep === 3 ? "field" : "title"} isn’t listed here?
          </span>
        )}
        <ul>
          {paginationList.map((element) => {
            if (element === currentStep - 3) {
              return <li className="current-step"></li>;
            } else {
              return <li></li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Step;
