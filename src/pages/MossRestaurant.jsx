/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/MossRestaurant.css";
import NavBarWhite from "./NavBarWhite";

function MossRestaurant() {
  return (
    <div className="Moss-BackgroundColor">
      <NavBarWhite />
      <div className="MossHeroSection">
        <div className="MossText">
          <h1 className="MossTitle">Moss Restaurant</h1>
          <p className="MossSubTitle">
            With a seasonal set menu, a subterranean wine cellar, stunning
            views, timeless design, and an exclusive Kitchen’s Table experience,
            Moss is a Michelin-starred gourmet revelation of innovative and
            creative cuisine.
          </p>
        </div>
        <section className="MossHeroImage"></section>
      </div>
    </div>
  );
}

export default MossRestaurant;
