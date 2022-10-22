import { Form, Formik, ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import Paginations from "./Paginations";
import "./StepFive.css";
import CROSS from "../../images/delete-cross.png";
import * as Yup from "yup";

const StepFive = ({ currentStep, handleSteps }) => {
  const [skillsList, setSkills] = useState([]);
  const [inputValue, setInput] = useState("");
  const initialValues = {
    jobChecked: [],
  };

  const schemaFormValidation = Yup.object().shape({
    jobChecked: Yup.array()

      .min(1, "You need to select one job category")

      .max(1, "You can only select one jon category")

      .required("Required"),
  });

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
  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  function handleDelete(value) {
    const newL = skillsList.filter((skill) => {
      return skill !== value;
    });
    setSkills(newL);
  }
  function handleType(event) {
    event.preventDefault();
    // setList(jobList.filter((job) =>
    //   jobs.match(new RegExp(searchQuery, `gi`))
    // );

    setSkills([...skillsList, inputValue]);
    setInput("");
  }

  return (
    <div className="step-container">
      <h2>What are your skills ?</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={schemaFormValidation}
        onSubmit={onSubmit}
      >
        <Form className="steps-form">
          <div className="form-skills">
            <div className="search-bar">
              <label htmlFor="search-skills">Skills</label>
              <Field
                placeholder="Select your skills"
                name="search-skills"
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleType(event);
                }}
                value={inputValue}
                onChange={handleChange}
              />
            </div>

            <div className="skills-display">
              <h3>My skills:</h3>
              <div className="skills-list">
                {skillsList.length > 0 ? (
                  skillsList.map((skill, index) => {
                    return (
                      <div key={skill + index} className="skill-box">
                        <span>{skill}</span>

                        <img
                          src={CROSS}
                          alt="delete-button"
                          onClick={() => handleDelete(skill)}
                        />
                      </div>
                    );
                  })
                ) : (
                  <p>Add your skills using the search bar</p>
                )}
              </div>
            </div>

            <ErrorMessage
              component={"div"}
              className="error-message"
              name="jobChecked"
            />
          </div>

          <div className="footer-form">
            <button type="submit" className="agora-button">
              Continue
            </button>
            <Paginations currentStep={currentStep} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepFive;
