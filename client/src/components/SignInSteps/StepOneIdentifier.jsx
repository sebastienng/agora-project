import "./StepOneIdentifier.css";
import StepOneButton from "./StepOneButton";
import freelance from "../../images/freelance.svg";
import company from "../../images/company.svg";
import axios from "axios";

function StepOneIdentifier({ handleSteps }) {
  const buttonHandler = (title) => {
    handleSteps();
    const type = title;

    const user = localStorage.getItem("userId");

    const config = {
      method: "put",
      url: "https://alunmi-agora-backend.herokuapp.com/api/user/" + user,
      headers: {
        "Content-Type": "application/json",
      },
      type: type,
    };
    console.log(config);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        handleSteps();
      })
      .catch(function (error) {
        console.log(error);
      });

    // Axios.patch(type)
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
          title={"Company"}
          description={"I’m a Company looking for talents"}
          eventFn={buttonHandler}
        />
      </div>
    </div>
  );
}

export default StepOneIdentifier;
