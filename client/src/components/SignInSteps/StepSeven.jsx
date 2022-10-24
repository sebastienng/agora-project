import { Form, Formik, ErrorMessage, Field, FieldArray } from "formik";
import React, { useState } from "react";
import Paginations from "./Paginations";
import "./StepSeven.css";
import CROSS from "../../images/delete-cross.png";
import * as Yup from "yup";

const StepFive = ({ currentStep, handleSteps }) => {
  const [languagesList, setLanguages] = useState([]);
  const [inputValue, setInput] = useState("");
  const initialValues = {
    userLanguages: [],
  };

  const schemaFormValidation = Yup.object().shape({
    userLanguages: Yup.array()

      .min(1, "Please select at least 1 language")

      .required("Required"),
  });

  function onSubmit(values) {
    // const data = JSON.stringify(values, null, 2);
    console.log(values);

    // axios.post(" https://alunmi-agora-backend.herokuapp.com/api/signup",data).then(id=>);
    handleSteps();
  }
  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  function handleDelete(value) {
    const newL = languagesList.filter((language) => {
      return language !== value;
    });
    setLanguages(newL);
  }
  function handleType(event) {
    event.preventDefault();
    // setList(jobList.filter((job) =>
    //   jobs.match(new RegExp(searchQuery, `gi`))
    // );

    setLanguages([...languagesList, inputValue]);
    setInput("");
  }

  return (
    <div className="step-container">
      <h2>What are your languages ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
          <FieldArray
            name="userLanguages"
            render={(arrayHelpers) => (
              <>
                <div className="form-languages">
                  <div className="search-bar">
                    <label htmlFor="search-languages">Languages</label>
                    <Field
                      placeholder="Select your languages"
                      name="search-languages"
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && inputValue !== "") {
                          handleType(event);
                          arrayHelpers.push(event.target.value);
                        }
                      }}
                      value={inputValue}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="languages-display">
                    <h3>My languages:</h3>

                    <div className="languages-list">
                      {languagesList.length > 0 ? (
                        languagesList.map((language, index) => {
                          return (
                            <div
                              key={"userLanguages." + index}
                              className="language-box"
                            >
                              <span>{language}</span>

                              <img
                                src={CROSS}
                                alt="delete-button"
                                onClick={() => handleDelete(language)}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <p>Add your languages using the search bar</p>
                      )}
                    </div>
                  </div>

                  <ErrorMessage
                    component={"div"}
                    className="error-message"
                    name="userLanguages"
                  />
                </div>
                <div className="footer-form">
                  <button type="submit" className="agora-button">
                    Continue
                  </button>
                  <Paginations currentStep={currentStep} />
                </div>
              </>
            )}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default StepFive;
