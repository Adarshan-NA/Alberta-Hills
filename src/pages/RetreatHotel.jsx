import React from "react";
import NavBarBlack from './NavBarBlack';
import RetreatBookingForm from './RetreatBookingForm';
import '../assets/styles/RetreatHotel.css';

function RetreatHotel(){
    return(
        <div className="RetreatHotel-BackgroundColor">
            <div className="navrelative">
                <NavBarBlack />
                <section className="RetreatHotel-Image"></section>
            </div>
            <div className="RetreatHotel">
                <h2 className="RetreatHotel-Title">The Retreat</h2>
                <p className="RetreatHotel-Subtitle">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
            <RetreatBookingForm />
            </div>
            <div className="RetreatHotel-Container">
                <div className="RetreatHotel-Color"></div>  
                <div className="RetreatHotel-landmark">
                    <h2 className="RetreatHotel-landmark_Title"> A landmark of luxury in a landscape of wonder</h2>
                    <p className="RetreatHotel-landmark_Subtitle">The Retreat at Blue Lagoon is an award-winning luxury resort encompassing a 60-suite hotel, a subterranean spa, Michelin-starred dining, and a private lagoon sourced from the same healing waters as the Blue Lagoon.</p>
                    <div className="RetreatHotel-landmark_Image_Left"></div>
                    <div className="RetreatHotel-landmark_Image_Right"></div>
                </div>  
            </div>
        </div>
    );
};

export default RetreatHotel;