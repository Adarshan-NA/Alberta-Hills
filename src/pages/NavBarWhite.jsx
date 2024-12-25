import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../assets/styles/NavBarWhite.css';


function NavBarWhite() {
  return (
    <div>
    <nav className="navWhite">
      <div className="logo"><a href="/">Alberta Hills</a></div>
      <ul className="navLinks">
        <li className="navItem"><Link to="/DayVisit">Day Visit</Link></li>
        <li className="navItem"><Link to="/Accomodation">Accomodation</Link></li>
        <li className="navItem"><Link to="/Dining">Dining</Link></li>
        <li className="navItem"><Link to="/Skincare">Skincare Shop</Link></li>
        <li className="navItem"><Link to="/MyBooking"><button className="button_white">My Booking</button></Link></li>
        <li className="navItem"><Link to="/BookNow"><button className="button_blue">Book now</button></Link></li>
      </ul>
    </nav>

    </div>

  );
}



export default NavBarWhite;