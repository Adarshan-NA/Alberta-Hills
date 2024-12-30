import React from "react";
import NavBarBlack from './NavBarBlack';
import '../assets/styles/Restaurants.css';
import BlueLagoon from '../assets/BlueLagoon.jpeg';
import RetreatHotel from '../assets/RetreatHotel.jpeg';
import Spa from '../assets/Spa.jpeg';

function Restaurants(){

    const Restaurants = [
        {id:1,title: "Lava Restaurant", img: BlueLagoon },
        {id:2,title: "Moss Restaurant", img: RetreatHotel },
        {id:3,title: "Spa Restaurant", img: Spa },
      ];

    return(
        <div>
            <NavBarBlack />
            <div className="Restaurants-Flex">
                <div className="Restaurants-List">
                    {Restaurants.map((Hotels) =>(
                        <div key={Hotels.id}>
                            <Link className="Restaurants-Link" to={Hotels.link}></Link>
                            <img src={Hotels.img} alt={Hotels.title} className="Restaurant-Image" />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Restaurants;