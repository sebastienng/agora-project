import "./StepTwoInput.css";
import { Field, ErrorMessage } from "formik";

export default function StepTwoInput({
  type,
  id,
  placeHolder,
  name,
  description,
}) {
  return (
    <div key={id} className={`sign-up-form-fields  ${id}`}>
      <label htmlFor={id}>{placeHolder ? placeHolder : description}</label>
      <Field type={type} id={id} name={name} placeholder={placeHolder} />
      <ErrorMessage name={name}>{(msg) => <div>{msg}</div>}</ErrorMessage>

      {/* error message have to change in validateSchema with correspond field name */}
    </div>
  );
}
