import React, { useState } from "react";
import "./auth.css";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import { Formik } from "formik";
import * as Yup from "yup";
import StepTwo from "../components/SignInSteps/StepTwo";
// import { signup } from "../services/auth";
// import { useNavigate } from "react-router-dom";
// import * as PATHS from "../utils/paths";
// import * as USER_HELPERS from "../utils/userToken";


export default function Signup({ authenticate }) {
  const initSignUpData = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    type: "",
    jobs: {
      category: "",
      title: "",
      skills: [],
      experience: 0,
    },
    language: [],
    description: "",
    location: "",
  };

  const [steps, setSteps] = useState(1);
  const [signUpData, setSignUpData] = useState(initSignUpData);


  return (
    <div>
      {steps === 1 ? <StepTwo /> : null}
      {steps === 2 ? <StepOneIdentifier setSignUpData={setSignUpData} /> : null}
    </div>
  );
}
