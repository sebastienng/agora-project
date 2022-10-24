import React from "react";

function ToolTip({ children}) {
  return (
    <span className="ToolTip"
      style={{
        width: "100%",
        fontSize: "0.93rem",
        position: "absolute",
        textAlign: "left",
        color: "red",
      }}
    >
      {children}
    </span>
  );
}

export default ToolTip;
