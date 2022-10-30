import React from "react";
import "./FinalStep.css";
import MenuIcon from "../../images/MenuIcon.svg";
import AGORA_LOGO from "../../images/logo-agora.png";
import MessageIcon from "../../images/MessageIcon.svg";
import ProfileIcon from "../../images/ProfileIcon.svg";
import BellIcon from "../../images/BellIcon.svg";

export default function FinalStep() {
  return (
    <section className="finalStepContainer">
      <nav>
        <ul>
          <li>
            <img src={MenuIcon} alt="menu" />
          </li>
          <li>
            <span>Agora</span>
          </li>

          <li>
            <img src={AGORA_LOGO} alt="logo" />
          </li>

          <li>
            <img src={MessageIcon} alt="logo" />
          </li>
          <li>
            <img src={ProfileIcon} alt="logo" />
          </li>
          <li>
            <img src={BellIcon} alt="logo" />
          </li>
        </ul>
      </nav>

      <div className="finalStepContentContainer">
        <h2>Congratulations!</h2>
        <p>
          Your profile has been created! We are matching your profile to
          companies’ missions.
        </p>
        <p>We’ll send you a notification when your matches are ready.</p>
        <img src={BellIcon} alt="notification" />
        <p className="finalStepParagraphe">In the meantime, you can have a look at your profile</p>
      </div>

      <button className="agora-button">See my profile</button>
    </section>
  );
}
