import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import "./StepTwo.css";
import StepTwoInput from "./StepTwoInput";
import signUpValidationShema from "../../config/signUpValidationSchema.js";

function StepTwo({ setSteps }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsLetter: false,
  };
  const onSubmit = (values) => {
    const data = JSON.stringify(values, null, 2);
    // data = {
    //   "firstName": "sdcqds",
    //   "lastName": "dcsdqc",
    //   "email": "csdcsd@dql.com",
    //   "password": "dqscsdx",
    //   "newsLetter": true
    // }
    // Axios.patch(data)
    setSteps(2);
  };
  const formFields = [
    {
      type: "text",
      id: "firstName",
      placeHolder: "First Name",
      name: "firstName",
    },
    {
      type: "text",
      id: "lastName",
      placeHolder: "Last Name",
      name: "lastName",
    },
    {
      type: "text",
      id: "email",
      placeHolder: "Email",
      name: "email",
    },
    {
      type: "password",
      id: "password",
      placeHolder: "Password",
      name: "password",
    },
    {
      type: "checkbox",
      id: "newsLetter",
      name: "newsLetter",
      description:
        "I do not wish to receive news, subscription offers and other promotions.",
    },
  ];

  return (
    <div className="registration">
      <h1> Register to Agora </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpValidationShema}
      >
        {() => (
          <Form>
            {formFields.map((fields) => {
              return StepTwoInput(fields);
            })}
            <button className="button-submit" type="submit">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
      <div className="policy">
        <p>
          By signing up you agree with our <span>Terms of Use</span> and
          <span> Privacy Policy</span>.
        </p>
        <button className="button-linkedIn">Login With LinkedIn </button>
      </div>
    </div>
  );
}

export default StepTwo;
