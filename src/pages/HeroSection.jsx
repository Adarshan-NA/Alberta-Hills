/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/NavBarBlack.css";

function HeroSection() {
  return (
    <div>
      <section className="hero"></section>
      <div className="overlay">
        <h1 className="Hero-title">
          Discover the <br></br>Wonder
        </h1>
        <br />
        <div className="Hero-subtitle">
          <p>
            Healing waters. A subterranean spa. <br /> Gourmet cuisine.
            Luxurious suites. Otherworldly vistas.
          </p>
          <p> A universe of radiant wellbeing.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
