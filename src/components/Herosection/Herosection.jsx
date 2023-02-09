import React from "react";
import Hero_Image from "../../assets/working.svg";
import "./Herosection.css";
import Button from "../Button/Button";

function Herosection() {
  return (
    <section className="herosection">
      <div className="hero-left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button />
      </div>
      <div className="hero-right">
        <img src={Hero_Image} alt="working" />
      </div>
    </section>
  );
}

export default Herosection;
