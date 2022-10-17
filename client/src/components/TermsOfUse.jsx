import React from "react";
import './TermsOfUse.css'
import Terms from "../config/Terms-of-use.jsx";



function TermsOfUse({ readTermsFn }) {
  return (
    <div className="terms-container">
      <div className="terms-content">{Terms()}</div>
      <button onClick={() => readTermsFn()}>Close</button>
    </div>
  );
}

export default TermsOfUse;
