import React, { useState } from "react";
import "./auth.css";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import StepTwo from "../components/SignInSteps/StepTwo";
import StepFour from "../components/SignInSteps/StepFour";
import StepFive from "../components/SignInSteps/StepFive";
import StepSix from "../components/SignInSteps/StepSix";
import StepThree from "../components/SignInSteps/StepThree";
import StepEight from "../components/SignInSteps/StepEight";
// import StepNine from "../components/SignInSteps/StepNine";

export default function Signup({ authenticate }) {
  const [steps, setSteps] = useState(1);

  const handleSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <div>
      {/* Charlotte changed the step order(1 and 2 ) , so we have change those comoents names later */}
      {steps === 1 ? <StepTwo handleSteps={handleSteps} /> : null}
      {steps === 2 ? <StepOneIdentifier handleSteps={handleSteps} /> : null}
      {steps === 3 ? (
        <StepThree currentStep={steps} handleSteps={handleSteps} />
      ) : null}
      {steps === 4 ? (
        <StepFour currentStep={steps} handleSteps={handleSteps} />
      ) : null}
      {steps === 5 ? (
        <StepFive currentStep={steps} handleSteps={handleSteps} />
      ) : null}
      {steps === 6 ? (
        <StepSix currentStep={steps} handleSteps={handleSteps} />
      ) : null}

      {steps === 8 ? (
        <StepEight handleSteps={handleSteps} currentStep={steps} />
      ) : null}

      {/* {steps === 9 ? <StepNine handleSteps={handleSteps} /> : null} */}
    </div>
  );
}
