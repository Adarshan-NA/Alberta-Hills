/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/RestaurantMenu.css";

function RestaurantMenu(props) {
  return (
    <div className="RestaurantMenuProps">
      <h3>{props.dishname}</h3>
      <p>{props.ingredients}</p>
      <p>{props.rate}</p>
    </div>
  );
}

export default RestaurantMenu;
