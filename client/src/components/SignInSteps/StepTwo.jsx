import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import StepTwoInput from "./StepTwoInput";

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
  const signUpShema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Must be at least 2 characters")
      .required("Required")
      .max(15, "Must be 15 characters or less"),
    lastName: Yup.string()
      .min(2, "Must be at least 2 characters")
      .required("Required")
      .max(20, "Must be 20 characters or less"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be more than 8 characters"),
  });

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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpShema}
      >
        {() => (
          <Form>
            {formFields.map((fields) => {
              return StepTwoInput(fields);
            })}

            <button type="submit"> Sign up </button>
          </Form>
        )}
      </Formik>
      <p>
        By signing up you agree with our <span>Terms of Use</span> and
        <span>Privacy Policy</span> .
      </p>
      <button>Login With LinkedIn </button>
    </div>
  );
}

export default StepTwo;
