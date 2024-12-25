import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/CardSection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function CardSection(){

  const sliderSettings = {
    infinite: true,          // Loop through the images
    speed: 500,              // Transition speed
    slidesToShow: 3,         // Number of slides visible at once
    arrows: true,            // Add previous/next buttons
    className: "center",
  };
  
  const cards = [
    {id:1,link:"/BlueLagoon" , title: "Blue Lagoon", img: "../src/assets/BlueLagoon.webp" },
    {id:2,link:"/RetreatHotel" , title: "Retreat Hotel", img: "../src/assets/RetreatHotel.webp" },
    {id:3,link:"/Spas&Wellness" , title: "Spas & Wellness", img: "../src/assets/Spa.jpg" },
    {id:4,link:"/Restaurants" , title: "Restaurants", img: "../src/assets/Restaurant.jpg" },
    
    // Add more cards as needed
  ];
  return (
    <div>
      <div className="card-section">
        <div className="grid-color">
        <h2 className="Card-title">An experience beyond compare awaits</h2>
          <p className="Card-subtitle">
            A visual journey through one of the wonders of the world
          </p>
          </div>
    <div className="image-slider">
      <Slider {...sliderSettings}>
        {cards.map((image) => (
          <div key={image.id}>
            <img src={image.img} alt={image.title} className="slider-image" />
            <Link className="slider-image-title" to={image.link}>{image.title}</Link>
          </div>  
        ))}
      </Slider>
    </div>
    </div>
  
    </div>
  );
}

export default CardSection;
