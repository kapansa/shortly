import React from "react";
import "./Dashboard.css";

function Card({ IconUrl, AltText, title, subtitle }) {
  return (
    <div className="item">
      <img src={IconUrl} alt={AltText} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default Card;
