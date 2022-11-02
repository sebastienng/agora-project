import React, { useState } from "react";
import StepEight from "../components/SignInSteps/StepEight";
import StepFive from "../components/SignInSteps/StepFive";
import StepFour from "../components/SignInSteps/StepFour";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import StepSeven from "../components/SignInSteps/StepSeven";
import StepSix from "../components/SignInSteps/StepSix";
import StepThree from "../components/SignInSteps/StepThree";

import StepNine from "../components/SignInSteps/StepNine";
import StepTen from "../components/SignInSteps/StepTen";
import StepTwo from "../components/SignInSteps/StepTwo";
import FinalStep from '../components/SignInSteps/FinalStep'

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
      {steps === 7 && (
        <StepSeven currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 8 && (
        <StepEight handleSteps={handleSteps} currentStep={steps} />
      )}
      {steps === 9 && (
        <StepNine currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 10 && (
        <StepTen currentStep={steps} handleSteps={handleSteps} />
      )}
      {steps === 11 && (
        <FinalStep />
      )}
    </div>
  );
}
