import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import StepOneIdentifier from "../components/SignInSteps/StepOneIdentifier";
import Step from "../components/SignInSteps/Step";

export default function Signup({ authenticate }) {
  const initSignUpData = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    type: "", // ["BUSINESS", "FREELANCE"]
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

  const [steps, setSteps] = useState(3);
  const [signUpData, setSignUpData] = useState(initSignUpData);

  // const [form, setForm] = useState({
  //   username: "",
  //   password: "",
  // });
  // const { username, password } = form;
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      // username,
      // password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        // return setError({
        //   message: "Signup was unsuccessful! Please check the console.",
        // });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      //navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="sign-up-steps">
      {steps === 1 ? <StepOneIdentifier setSignUpData={setSignUpData} /> : null}
      {steps === 3 ? (
        <Step title={"What's your job category ?"} currentStep={steps} />
      ) : null}
      {/* <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Text"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>*/}
    </div>
  );
}
