import React from "react";

function ToolTip({ children }) {
  return (
    <span
      style={{
        width:'100%',
        fontSize: "0.93rem",
        color: "--text-color",
        position: "absolute",
        top: "57px",
        left: "24px",
      }}
    >
      {children}
    </span>
  );
}

export default ToolTip;
