import React from "react";

const Paginations = ({ currentStep }) => {
  const paginationList = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <ul>
      {paginationList.map((element, i) => {
        if (element === currentStep - 3) {
          return <li key={"liste-pag" + i} className="current-step"></li>;
        } else {
          return <li key={"liste-pag" + i}></li>;
        }
      })}
    </ul>
  );
};

export default Paginations;
