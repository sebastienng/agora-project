import "./StepTwoInput.css";
import { Field, ErrorMessage } from "formik";
import ToolTip from "../../components/ToolTip";

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
      <ErrorMessage component={ToolTip} name={name} />
        
      {/* if want change error message , go to config/validateSchema  */}
    </div>
  );
}