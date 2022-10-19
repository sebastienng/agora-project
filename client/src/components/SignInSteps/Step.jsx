import { Form, Formik, ErrorMessage } from "formik";
import React from "react";
import Paginations from "./Paginations";
import "./Step.css";
import Three from "./StepThree/Three";
import * as Yup from "yup";

const Step = ({ title, currentStep, handleSteps }) => {
  const initialValues = {
    jobChecked: [],
  };
  const schemaFormValidation = Yup.object().shape({
    jobChecked: Yup.array()

      .min(1, "You need to select one job category")

      .max(1, "You can only select one jon category")

      .required("Required"),
  });
  function renderForm(currentStep) {
    switch (currentStep) {
      case 1:
        return "Step 1";
      case 2:
        return "Step 1";
      case 3:
        return <Three />;
      case 4:
        return "Step 1";
      default:
        return "This step does not exist.";
    }
  }

  function onSubmit(values) {
    const data = JSON.stringify(values, null, 2);
    console.log(values);
    // data = {
    //   "firstName": "sdcqds",
    //   "lastName": "dcsdqc",
    //   "email": "csdcsd@dql.com",
    //   "password": "dqscsdx",
    //   "newsLetter": true
    // }

    // axios.post(" https://alunmi-agora-backend.herokuapp.com/api/signup",data).then(id=>);
    handleSteps();
  }

  return (
    <div className="step-container">
      <h2>{title}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <div>
            <Form className="steps-form">
              {renderForm(currentStep)}

              <div className="footer-form">
                <button type="submit" className="agora-button">
                  Continue
                </button>
                <span>Your job field isn’t listed here?</span>
                <Paginations currentStep={currentStep} />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Step;
