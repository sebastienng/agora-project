import "./StepOneIdentifier.css";
import StepOneButton from "./StepOneButton";
import freelance from "../../images/freelance.svg";
import company from "../../images/company.svg";

function StepOneIdentifier({ setSteps }) {
  const buttonHandler = (title) => {
    const type = title.toUppercase();
    // Axios.patch(type)
    setSteps(3);
  };

  return (
    <div className="stepOneContainer">
      <h2>Let us know who you are...</h2>
      <div className="buttonContainer">
        <StepOneButton
          img={freelance}
          title={"Freelance"}
          description={"I’m a freelancer looking for work"}
          eventFn={buttonHandler}
        />
        <StepOneButton
          img={company}
          title={"Business"}
          description={"I’m a Talent Acquisition looking for talents"}
          eventFn={buttonHandler}
        />
      </div>
    </div>
  );
}

export default StepOneIdentifier;
