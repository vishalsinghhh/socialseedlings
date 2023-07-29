import React from "react";
import "./Cards.css";

const Util = ({ name }) => {
  return (
    <div className="MainScroll">
      <div className="scroll text1">
        <div>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
        </div>
      </div>
      <div className="scroll text2">
        <div>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
        </div>
      </div>
      <div className="scroll text3">
        <div>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
        </div>
      </div>
      <div className="scroll text4">
        <div>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
        </div>
      </div>
      <div className="scroll text5">
        <div>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Util;
