/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/NavBarWhite.css";

function NavBarWhite() {
  return (
    <div>
      <nav className="navWhite">
        <div className="logoWhite">
          <a href="/">Alberta Hills</a>
        </div>
        <ul className="navLinksWhite">
          <li className="navItemWhite">
            <Link to="/BlueLagoon">Day Visit</Link>
          </li>
          <li className="navItemWhite">
            <Link to="/RetreatHotel">Accomodation</Link>
          </li>
          <li className="navItemWhite">
            <Link to="/Restaurants">Dining</Link>
          </li>
          <li className="navItemWhite">
            <Link to="/Spa">Spa</Link>
          </li>
          <li className="navItemWhite">
            <Link to="/MyBooking">
              <button className="button_white">My Booking</button>
            </Link>
          </li>
          <li className="navItemWhite">
            <Link to="/BookNow">
              <button className="button_blue">Book now</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarWhite;
