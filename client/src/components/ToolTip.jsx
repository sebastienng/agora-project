import React from "react";

function ToolTip({ children }) {
  return (
    <span
      style={{
        width:'100%',
        fontSize: "0.93rem",
        position: "absolute",
        top: "57px",
        left: "28px",
        textAlign: 'left',
        color:'red'
      }}
    >
      {children}
    </span>
  );
}

export default ToolTip;
