import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../api";
import useAuth from "../config/hooks/useAuth";
import "./Signup";

export default function LogIn() {
  const navigate = useNavigate();
  const [, setAuth] = useAuth();

  const { handleSubmit, touched, errors, getFieldProps, isSubmitting } =
    useFormik({
      initialValues: {
        email: null,
        password: null,
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email("Enter a valide email").required(),
        password: Yup.string().required(),
      }),
      onSubmit: (values, { setSubmitting }) => {
        setSubmitting(true);
        login(values)
          .then(({ data }) => setAuth(data))
          .then(() => setSubmitting(false))
          .finally(() => navigate("/"));
      },
    });

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="signup__form">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...getFieldProps("email")} />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}

        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...getFieldProps("password")} />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}

        <button
          className="button__submit"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
