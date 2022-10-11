import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import AGORA_LOGO from "../images/logo-agora.png";

import * as PATHS from "../utils/paths";

function HomePage() {
  return (
    <div className="home-page-display">
      <header>
        <h1>Agora</h1>
        <img src={AGORA_LOGO} alt="Logo of Agora" />
      </header>
      <div className="catch-phrases">
        <p>
          Connect easily with companies or freelancers thanks to our matching
          algorithm.
        </p>
        <span>Create your profile to start the adventure!</span>
      </div>

      <div className="auth-links-button">
        <Link to={PATHS.SIGNUPPAGE} className="agora-button">
          Signup
        </Link>
        <Link to={PATHS.LOGINPAGE} className="agora-button empty">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
