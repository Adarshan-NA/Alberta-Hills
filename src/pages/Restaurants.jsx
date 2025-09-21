/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import NavBarBlack from "./NavBarBlack";
import "../assets/styles/Restaurants.css";
import RestaurantCards from "./RestaurantCards";
import LavaRestaurant from "../assets/LavaRestaurant.jpg";
import BlueCafe from "../assets/BlueCafe.jpg";
import MossRestaurant from "../assets/MossRestaurant.jpg";

function Restaurants() {
  return (
    <div>
      <div>
        <NavBarBlack />
      </div>
      <div className="restaurant-container">
        <Link to="/LavaRestaurant" className="RestaurantLink">
          <RestaurantCards
            image={LavaRestaurant}
            title="Lava Restaurant"
            description="Culinary classics. Volcanic architecture."
          />
        </Link>
        <Link to="/BlueCafe" className="RestaurantLink">
          <RestaurantCards
            image={BlueCafe}
            title="Blue Café"
            description="Fresh snacks. Refreshing beverages."
          />
        </Link>
        <Link to="/MossRestaurant" className="RestaurantLink">
          <RestaurantCards
            image={MossRestaurant}
            title="Moss Restaurant"
            description="Michelin-starred cuisine. An unforgettable experience."
          />
        </Link>
      </div>
    </div>
  );
}

export default Restaurants;
