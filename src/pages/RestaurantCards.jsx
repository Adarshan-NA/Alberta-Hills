import React from "react";
import "../assets/styles/RestaurantCards.css";

function RestaurantCards ({ image, title, description }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={title} className="restaurant-image" />
      <h3 className="restaurant-title">{title}</h3>
      <p className="restaurant-description">{description}</p>
    </div>
  );
};

export default RestaurantCards;
