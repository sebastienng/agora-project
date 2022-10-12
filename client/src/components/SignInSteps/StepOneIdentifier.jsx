import StepOneButton from "./StepOneButton";
import freelance from "../../images/freelance.svg";
import company from "../../images/company.svg";

function StepOneIdentifier() {
  return (
    <div>
      <h2>Let us know who you are </h2>
      <StepOneButton
        img={freelance}
        title={"Freelance"}
        description={"I’m a freelancer looking for work"}
      />
      <StepOneButton
        img={company}
        title={"Company"}
        description={"I’m a company looking for talents"}
      />
    </div>
  );
}

export default StepOneIdentifier;
