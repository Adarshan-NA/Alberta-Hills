import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBarWhite from './NavBarWhite';
import BookingForm from './BookingForm';
import BlueLagoonCard from './BlueLagoonCard';
import '../assets/styles/BlueLagoon.css';
import '../assets/styles/BookingForm.css';
import '../assets/styles/BlueLagoonCard.css';


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
      <div className="BlueLagoon-Container">
      <div className="BlueLagoon-Color"></div>  
      <div className="BlueLagoon-Wonder">
            <h2 className="BlueLagoon-Wonder_Title"> Alberta's wonder of the world</h2>
            <p className="BlueLagoon-Wonder_Subtitle">Named one of 25 wonders of the world by National Geographic in 2012, the Blue Lagoon was honored for its unique geothermal seawater. Found nowhere else on earth, this renowned resource is rich in silica, algae, and minerals—the elements that give the lagoon its skin-nourishing powers.</p>
            <div className="BlueLagoon-Wonder_Image_Left"></div>
            <div className="BlueLagoon-Wonder_Image_Right"></div>
      </div>  
      </div>
      <BlueLagoonCard />
      
    </div>
  );
};

export default BlueLagoon;
