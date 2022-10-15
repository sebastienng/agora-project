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
    .required("Required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be more than 8 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
});

export default signUpValidationShema;
