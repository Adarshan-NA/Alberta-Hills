/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/BlueLagoonCard.css";

function BlueLagoonCard() {
  return (
    <div className="admission-container">
      <div className="intro">
        <h2>Choose your admission</h2>
        <p>
          Pre-booking is essential. Whether you choose Comfort, Premium, or
          Signature, you will have unlimited access to the Blue Lagoon.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-image1"></div>
          <div className="card-content">
            <h3>Comfort</h3>
            <p className="price">Price from 100 CAD</p>
            <ul>
              <li>- Entrance to the Blue Lagoon</li>
              <li>- Silica Mud Mask at the Mask Bar</li>
              <li>- Use of towel</li>
              <li>- 1 drink of your choice</li>
            </ul>
            <button className="book-now-btn">Book now</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image2"></div>
          <div className="card-content">
            <h3>Premium</h3>
            <p className="price">Price from 200 CAD</p>
            <ul>
              <li>- Entrance to the Blue Lagoon</li>
              <li>- Silica Mud Mask at the Mask Bar</li>
              <li>- Use of towel</li>
              <li>- 2 drinks of your choice</li>
            </ul>
            <button className="book-now-btn">Book now</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image3"></div>
          <div className="card-content">
            <h3>Signature</h3>
            <p className="price">Price from 350 CAD</p>
            <ul>
              <li>- Entrance to the Blue Lagoon</li>
              <li>- Silica Mud Mask at the Mask Bar</li>
              <li>- Use of towel</li>
              <li>- 2 drinks of your choice</li>
              <li>- Two additional masks at the Mask Bar</li>
              <li>- Use of bathrobe</li>
            </ul>
            <button className="book-now-btn">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueLagoonCard;
