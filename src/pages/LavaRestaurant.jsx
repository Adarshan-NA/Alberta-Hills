/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/LavaRestaurant.css";
import NavBarBlack from "./NavBarBlack";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import StarterLeftImage from "../assets/StarterLeftImage.jpg";
import StarterRightImage from "../assets/StarterRightImage.jpg";
import MainDishLeftImage from "../assets/MainDishLeftImage.jpg";
import MainDishRightImage from "../assets/MainDishRightImage.jpg";
import DessertLeftImage from "../assets/DessertLeftImage.jpg";
import DessertRightImage from "../assets/DessertRightImage.jpg";

const starters = [
  {
    id: 1,
    dishName: "Mushroom soup",
    ingredients: "Shiitake mushrooms, oyster mushrooms, cream",
    price: "30 CAD",
  },
  {
    id: 2,
    dishName: "Baked Golden and Ruby Beets",
    ingredients: "lettuce, radish, chickpeas",
    price: "25 CAD",
  },
  {
    id: 3,
    dishName: "Langoustine Soup",
    ingredients: "garlic-marinated langoustine, dulse",
    price: "35 CAD",
  },
  {
    id: 4,
    dishName: "Chicken liver parfait",
    ingredients: "blueberries, crispy bread, bacon",
    price: "45 CAD",
  },
  {
    id: 5,
    dishName: "Arctic char",
    ingredients: "cucumber, rye bread, greek yogurt",
    price: "35 CAD",
  },
];

const MainDish = [
  {
    id: 1,
    dishName: "Grilled Cauliflower",
    ingredients: "Tomatoes, grapes, quinoa",
    price: "50 CAD",
  },
  {
    id: 2,
    dishName: "COD",
    ingredients: "apples, mashed potatoes, shellfish sauce, fennel",
    price: "65 CAD",
  },
  {
    id: 3,
    dishName: "Fish of the day",
    ingredients: "potatoes, broccolini, dates, shellfish sauce",
    price: "65 CAD",
  },
  {
    id: 4,
    dishName: "Lamb Fillet",
    ingredients: "potatoes, parsnip, carrots",
    price: "75 CAD",
  },
  {
    id: 5,
    dishName: "Grilled Beef",
    ingredients: "asparagus, sweet potatoes, kale",
    price: "90 CAD",
  },
];

const Dessert = [
  {
    id: 1,
    dishName: "Crème Brûlée",
    ingredients: "vanilla, orange, almonds",
    price: "30 CAD",
  },
  {
    id: 2,
    dishName: "Skyr Ganache",
    ingredients: "blueberries, toffee, cacao",
    price: "30 CAD",
  },
  {
    id: 3,
    dishName: "Ástarpungar and Caramel",
    ingredients: "mango chocolate mousse, vanilla ice cream",
    price: "30 CAD",
  },
  {
    id: 4,
    dishName: "Vegan Lemon Mousse",
    ingredients: "strawberries, soup, oats",
    price: "30 CAD",
  },
];

function LavaRestaurant() {
  return (
    <div className="LavaBody">
      <NavBarBlack />
      <div className="LavaText">
        <h1 className="LavaTitle">Lava Restaurant</h1>
        <p className="LavaSubTitle">
          Gourmet dining on the shores of a wonder of the world. <br />
          Showcasing the savory highlights of Icelandic cuisine, our menus are
          based on the finest, freshest local ingredients.
        </p>
        <Link to="/MyBooking">
          <button className="LavaButton_blue">Reserve a table</button>
        </Link>
      </div>
      <div className="LavaImage">
        <div className="LavaColor"></div>
        <div className="Lava_Images">
          <section className="LavaLeftImage"></section>
          <section className="LavaRightImage"></section>
        </div>
      </div>

      <div className="LavaSetting">
        <div className="LavaSettingText">
          <h1 className="LavaSettingTitle">A remarkable setting</h1>
          <p className="LavaSettingSubtitle">
            Built into an 800-year-old lava cliff on the west bank of the Blue
            Lagoon, Lava Restaurant is a place where dynamic cuisine and
            enchanting design create unforgettable culinary experiences.
          </p>
        </div>
        <div className="LavaSettingImages">
          <section className="LavaSettingLeftImage"></section>
          <section className="LavaSettingRightImage"></section>
        </div>
      </div>

      <div className="MenuAlacarte">
        <h1 className="Alacartemenu">A la carte menu</h1>
        <div className="StarterMenuImage">
          <img className="MenuLeftImage" src={StarterLeftImage} alt="Title" />
          <div className="MenuStarters">
            <h1 className="Starters">Starters</h1>
            {starters.map((menu) => {
              return (
                <div>
                  <RestaurantMenu
                    key={menu.id}
                    dishname={menu.dishName}
                    ingredients={menu.ingredients}
                    rate={menu.price}
                  />
                </div>
              );
            })}
          </div>
          <img className="MenuRightImage" src={StarterRightImage} alt="Title" />
        </div>

        <div className="MainDishMenuImage">
          <img className="MenuLeftImage" src={MainDishLeftImage} alt="Title" />
          <div className="MenuStarters">
            <h1 className="Starters">Main Dishes</h1>
            {MainDish.map((menu) => {
              return (
                <div>
                  <RestaurantMenu
                    key={menu.id}
                    dishname={menu.dishName}
                    ingredients={menu.ingredients}
                    rate={menu.price}
                  />
                </div>
              );
            })}
          </div>
          <img
            className="MenuRightImage"
            src={MainDishRightImage}
            alt="Title"
          />
        </div>

        <div className="DessertMenuImage">
          <img className="MenuLeftImage" src={DessertLeftImage} alt="Title" />
          <div className="MenuStarters">
            <h1 className="Starters">Desserts</h1>
            {Dessert.map((menu) => {
              return (
                <div>
                  <RestaurantMenu
                    key={menu.id}
                    dishname={menu.dishName}
                    ingredients={menu.ingredients}
                    rate={menu.price}
                  />
                </div>
              );
            })}
          </div>
          <img className="MenuRightImage" src={DessertRightImage} alt="Title" />
        </div>
      </div>
    </div>
  );
}

export default LavaRestaurant;
