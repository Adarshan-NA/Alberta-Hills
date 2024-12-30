import React from "react";
import NavBarWhite from './NavBarWhite';
import SpaBookingForm from './SpaBookingForm';
import '../assets/styles/Spa.css';

function Spa(){
    return(
        <div className="RetreatHotel-BackgroundColor">
            <div className="navrelative">
                <NavBarWhite />
                <section className="RetreatHotelSpa-Image"></section>
            </div>
            <div className="RetreatHotel">
                <h2 className="RetreatHotel-Title">The Retreat Spa</h2>
                <p className="RetreatHotel-Subtitle">A geothermal paradise of timeless wellbeing.</p>
            <SpaBookingForm />
            </div>
            <div className="RetreatHotel-Container">
                <div className="RetreatHotel-Color"></div>  
                <div className="RetreatHotel-landmark">
                    <h2 className="RetreatHotel-landmark_Title">About the spa</h2>
                    <p className="RetreatHotel-landmark_Subtitle">Covering 2300 square meters and surrounded by the Retreat Lagoon, this subterranean sanctuary embodies the inspiring interplay of nature, design, and the radiant powers of geothermal seawater. Encompassing multiple experience areas, the spa journey culminates with the Blue Lagoon Ritual, bringing you into harmony with the nourishing wonders of the volcanic earth.</p>
                    <div className="RetreatHotelSpa_Image_Left"></div>
                    <div className="RetreatHotelSpa_Image_Right"></div>
                </div>  
            </div>
        </div>
    );
};

export default Spa;