import React from 'react';
import '../assets/styles/LavaRestaurant.css';
import NavBarBlack from './NavBarBlack';
import { Link } from "react-router-dom";

function LavaRestaurant(){
    return(
        <div>
            <NavBarBlack />
            <div className="LavaText">
                <h1 className="LavaTitle">Lava Restaurant</h1>
                <p className="LavaSubTitle">Gourmet dining on the shores of a wonder of the world. <br />Showcasing the savory highlights of Icelandic cuisine, our menus are based on the finest, freshest local ingredients.</p>
                <Link to="/MyBooking"><button className="LavaButton_blue">Reserve a table</button></Link>
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
                    <p className="LavaSettingSubtitle">Built into an 800-year-old lava cliff on the west bank of the Blue Lagoon, Lava Restaurant is a place where dynamic cuisine and enchanting design create unforgettable culinary experiences.</p>
                </div>
                <div className="LavaSettingImages">
                    <section className="LavaSettingLeftImage"></section>
                    <section className="LavaSettingRightImage"></section>
                </div>
            </div>

        </div>
    );
};

export default LavaRestaurant;