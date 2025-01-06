import React from 'react';
import '../assets/styles/BlueCafe.css';
import NavBarBlack from './NavBarBlack';
import NourishmentImage from '../assets/BlueCafeNourishmentImage.jpeg';


function BlueCafe(){
    return(
        <div>
            <NavBarBlack />
            <div className="BlueCafeText">
                <h1 className="BlueCafeTitle">Blue Cafe</h1>
                <p className="BlueCafeSubTitle">Spacious. Relaxing. Fulfilling.</p>
            </div>
            <div className="BlueCafeImage">
            <div className="BlueCafeColor"></div>
                <div className="BlueCafe_Images">
                <section className="BlueCafeLeftImage"></section>
                <section className="BlueCafeRightImage"></section>
            </div>
            </div>

            <div className="BlueCafeTimings">
                <section className="BlueCafeNourishmentImage"></section>
                <div className="BlueCafeNourishment">
                    <h2>Nourishment and enchantment</h2>
                    <p>Offering a delicious range of snacks and refreshments, the café features stunning views of the Blue Lagoon.</p>
                    <p>open daily from 08:00 - 22:00</p>
                </div>
            </div>

            <div className="BlueCafeBreakfast">
                <section className="BlueCafeBreakfastImage"></section>
                <div className="BlueCafeBreakfastBox">
                    <h2>Breakfast box</h2>
                    <p>Enjoy our savory breakfast. You can get your meal in an eco-friendly takeaway box or dine in. The box includes a bagel, fresh fruits, juice, coffee, and a muffin, all for ISK 4,900. Pick up your box at Blue Café. Groups can pre-book takeaway boxes.</p>
                </div>
            </div>
        </div>
    );
};

export default BlueCafe;