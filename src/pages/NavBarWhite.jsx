import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../assets/styles/NavBarWhite.css';


function NavBarWhite() {
  return (
    <div>
    <nav className="navWhite">
      <div className="logoWhite"><a href="/">Alberta Hills</a></div>
      <ul className="navLinksWhite">
        <li className="navItemWhite"><Link to="/DayVisit">Day Visit</Link></li>
        <li className="navItemWhite"><Link to="/RetreatHotel">Accomodation</Link></li>
        <li className="navItemWhite"><Link to="/Dining">Dining</Link></li>
        <li className="navItemWhite"><Link to="/Spa">Spa</Link></li>
        <li className="navItemWhite"><Link to="/MyBooking"><button className="button_white">My Booking</button></Link></li>
        <li className="navItemWhite"><Link to="/BookNow"><button className="button_blue">Book now</button></Link></li>
      </ul>
    </nav>

    </div>

  );
}



export default NavBarWhite;