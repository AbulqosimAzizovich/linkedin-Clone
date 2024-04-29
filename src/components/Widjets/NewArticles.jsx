import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./style.scss";

const NewArticles = ({ heading, subtitle }) => {
  return (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default NewArticles;
