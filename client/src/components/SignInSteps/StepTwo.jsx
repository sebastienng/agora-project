import "./StepTwo.css";

import { Form, Formik } from "formik";
import React, { useState } from "react";
import { signup } from "../../api";
import TermsOfUse from "../../components/TermsOfUse";
import useAuth from "../../config/hooks/useAuth";
import signUpValidationShema from "../../config/signUpValidationSchema.js";
import StepTwoInput from "./StepTwoInput";

function StepTwo({ handleSteps }) {
  const [readTerms, setReadState] = useState(false);
  const [setAuth] = useAuth();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    newsLetter: false,
  };

  const onSubmit = (values) => {
    signup(values)
      .then(({ data }) => setAuth(data))
      .finally(handleSteps());
  };

  const formFields = [
    {
      type: "text",
      id: "firstname",
      placeHolder: "First Name",
      name: "firstname",
    },
    {
      type: "text",
      id: "lastname",
      placeHolder: "Last Name",
      name: "lastname",
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
