import React, { useState } from "react";
import StepEight from "../components/SignInSteps/StepEight";
import StepFive from "../components/SignInSteps/StepFive";
import StepFour from "../components/SignInSteps/StepFour";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import StepSix from "../components/SignInSteps/StepSix";
import StepThree from "../components/SignInSteps/StepThree";
import StepTwo from "../components/SignInSteps/StepTwo";
import "./auth.css";

export default function Signup({ authenticate }) {
  const [steps, setSteps] = useState(1);

  const handleSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <div>
      {/* Charlotte changed the step order(1 and 2 ) , so we have change those comoents names later */}
      {steps === 1 && <StepTwo handleSteps={handleSteps} />}
      {steps === 2 && <StepOneIdentifier handleSteps={handleSteps} />}
      {steps === 3 && (
        <StepThree currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 4 && (
        <StepFour currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 5 && (
        <StepFive currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 6 && <StepSix currentStep={steps} handleSteps={handleSteps} />}

      {steps === 8 && (
        <StepEight handleSteps={handleSteps} currentStep={steps} />
      )}
    </div>
  );
}
