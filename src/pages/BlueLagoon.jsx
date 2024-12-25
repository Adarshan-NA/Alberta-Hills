import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBarWhite from './NavBarWhite';
import BookingForm from './BookingForm';
import '../assets/styles/BlueLagoon.css';
import '../assets/styles/BookingForm.css';


function BlueLagoon() {
  return (
    <div>
      <div className="navrelative">
      <NavBarWhite />
      <section className="BlueLagoon-Image"></section>
      </div>
      <div className="BlueLagoon">
        <h2 className="BlueLagoon-Title">The Blue Lagoon</h2>
        <p className="BlueLagoon-Subtitle">A geothermal wonder in the heart of an otherworldly landscape.</p>
      </div>
      <BookingForm />

    </div>
  );
};

export default BlueLagoon;
