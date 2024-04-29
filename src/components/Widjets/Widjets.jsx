import React from "react";
import "./style.scss";
import InfoIcon from "@mui/icons-material/Info";
import NewArticles from "./NewArticles";

function Widjets() {
  const newArticles = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      <NewArticles
        heading="This is a medify team #tnt"
        subtitle="Top news - 9099 readers"
      />
      <NewArticles
        heading="Covid 20 pro max "
        subtitle="Top news - 843 readers"
      />
      <NewArticles
        heading="Tesla hits new highs"
        subtitle="Car & auto  - 2341 readers"
      />
      <NewArticles heading="Redux is trash ?" subtitle="Code - 10234 readers" />
    </div>
  );
}

export default Widjets;
