import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

function StepNine({ handleSteps }) {
  const initialValues = { content: "" };
  const onSubmit = (values) => {
    const data = JSON.stringify(values, null, 2);
    //Axios patch (data)
  };

  return (
    <div>
      <h2>Tell us about yourself</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="pitchBio">
            Write a short bio to introduce yourself
          </label>
          <Field
            id="pitchBio"
            as="textarea"
            name="bio"
            placeholder="Ex: My name is ... I’ve been Product Designer for 5 years...."
          ></Field>
          <ErrorMessage name='bio'/>
        </Form>
      </Formik>
    </div>
  );
}

export default StepNine