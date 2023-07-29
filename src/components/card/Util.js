import React from "react";
import "./Cards.css";

const Util = ({ name }) => {
  return (
    <div className="MainScroll">
      <div className="scroll text1">
        <div>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
        </div>
      </div>
      <div className="scroll text2">
        <div>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
        </div>
      </div>
      <div className="scroll text3">
        <div>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
        </div>
      </div>
      <div className="scroll text4">
        <div>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
          <span>{" "}</span>
          {name}
        </div>
      </div>
      <div className="scroll text5">
        <div>
          {name}
          <span> </span>
          {name}
          <span> </span>
          {name}
          <span> </span>
          {name}
        </div>

      </div>
    </div>
  );
};

export default Util;
