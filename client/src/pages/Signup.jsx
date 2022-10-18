import React, { useState } from "react";
import "./auth.css";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import StepTwo from "../components/SignInSteps/StepTwo";
import Step from "../components/SignInSteps/Step";
// import { signup } from "../services/auth";
// import { useNavigate } from "react-router-dom";
// import * as PATHS from "../utils/paths";
// import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [steps, setSteps] = useState(3);

  const handleSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <div>
      {/* Charlotte changed the step order(1 and 2 ) , so we have change those comoents names later */}
      {steps === 1 ? <StepTwo handleSteps={handleSteps} /> : null}
      {steps === 2 ? <StepOneIdentifier handleSteps={handleSteps} /> : null}
      {steps === 3 ? (
        <Step
          title={"What's your job category ?"}
          currentStep={steps}
          handleSteps={handleSteps}
        />
      ) : null}
    </div>
  );
}
