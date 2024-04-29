import React from "react";
import "./inputOption.scss";

const InputOption = ({ title, Icon, color }) => {
  return (
    <>
      <div className="inputOption">
        <Icon style={{ color: color }} />
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default InputOption;
