import * as Yup from "yup";

const signUpValidationShema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required")
    .max(15, "Must be 15 characters or less"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be more than 8 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
      message: "Please create a strong password",
    }),
  // - at least 8 characters
  // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
  // - Can contain special characters
});

export default signUpValidationShema;
