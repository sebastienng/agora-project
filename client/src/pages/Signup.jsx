import React, { useState } from "react";
import "./auth.css";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import StepTwo from "../components/SignInSteps/StepTwo";
// import { signup } from "../services/auth";
// import { useNavigate } from "react-router-dom";
// import * as PATHS from "../utils/paths";
// import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [steps, setSteps] = useState(1);

  return (
      {steps === 3 ? (
        <Step title={"What's your job category ?"} currentStep={steps} />
      ) : null}
    <div>
      {/* Charlotte changed the step order(1 and 2 ) , so we have change those comoents names later */}
      {steps === 1 ? <StepTwo setSteps={setSteps} /> : null}
      {steps === 2 ? <StepOneIdentifier setSteps={setSteps} /> : null}
    </div>
  );
}
