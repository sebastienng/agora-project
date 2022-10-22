import "./StepTwo.css";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import TermsOfUse from "../../components/TermsOfUse";
import StepTwoInput from "./StepTwoInput";
import signUpValidationShema from "../../config/signUpValidationSchema.js";

function StepTwo({ handleSteps }) {
  const [readTerms, setReadState] = useState(false);

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

    // axios.post(" https://alunmi-agora-backend.herokuapp.com/api/signup",data).then(id=>);
    handleSteps();
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

  const readTermsFn = () => {
    setReadState(!readTerms);
  };

  return (
    <>
      <div
        className="registration"
        style={{ display: `${readTerms ? "none" : "flex"}` }}
      >
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
        <div className="registration-policy">
          <p>
            By signing up you agree with our&nbsp;
            <span
              onClick={() => {
                readTermsFn();
              }}
            >
              Terms of Use
            </span>
            &nbsp;and&nbsp;
            <span
              onClick={() => {
                readTermsFn();
              }}
            >
              Privacy Policy
            </span>
            .
          </p>
          <button className="button-linkedIn">Login With LinkedIn </button>
        </div>
      </div>
      {readTerms ? <TermsOfUse readTermsFn={readTermsFn} /> : null}
    </>
  );
}

export default StepTwo;
