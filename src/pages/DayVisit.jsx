/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/DayVisit.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function DayVisit() {
  return (
    <div>
      <div className="DayVisit">
        <h1 className="DayVisit-title">Day visit</h1>
        <div className="DayVisit-subtitle">
          <p>
            Discover the waters of the Alberta Hills. Journey through a spa of
            the volcanic earth.
          </p>
        </div>
      </div>
      <div className="DayVisit-group">
        <div className="DayVisit-image"></div>
        <h3 className="DayVisit-BlueLagoon">The Blue Lagoon</h3>
        <p className="DayVisit-BlueLagoonPrice">From 100 CAD</p>
        <p className="DayVisit-Discover">
          Discover the waters of the Blue Lagoon. Experience a wonder of the
          world. Harmonize with nature.
        </p>
        <div className="Button-Flex">
          <Link to="BlueLagoonBooking">
            <button className="DayVisit-button_white">Book now</button>
          </Link>
          <Link to="BlueLagoonExplore">
            <button className="DayVisit-button_blue">Explore</button>
          </Link>
        </div>
      </div>
      <div className="DayVisit-color">
        <div className="DayVisit-Card">
          <div className="DayVisitCard-img"></div>
          <div className="DayVisit-TextColor">
            <div className="DayVisit-RetreatSpa">The Retreat Spa</div>
            <div className="DayVisit-RetreatSpaPrice">
              From 800 CAD per changing room
            </div>
            <p className="DayVisit-Luxurious">
              A luxurious journey into the volcanic earth. 5 hour exclusive
              entry to the Retreat Spa and the Blue Lagoon.
            </p>
          </div>
          <div className="Button-Flex">
            <Link to="BlueLagoonBooking">
              <button className="DayVisit-button_white">Book now</button>
            </Link>
            <Link to="BlueLagoonExplore">
              <button className="DayVisit-button_blue">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayVisit;
