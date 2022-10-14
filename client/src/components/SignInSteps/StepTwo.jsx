import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function StepTwo() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      >
        {() => (
          <form>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input type="checkbox" name="newsLetter" id="newsLetter" />
            <label htmlFor="newsLetter">
              I do not wish to receive news, subscription offers and other
              promotions.
            </label>
            <button type="submit"> Sign up </button>
          </form>
        )}
      </Formik>
      <p>
        By signing up you agree with our <span>Terms of Use</span> and{" "}
        <span>Privacy Policy</span> .
      </p>
      <button>Login With LinkedIn </button>
    </div>
  );
}

export default StepTwo;
