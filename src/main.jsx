import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/fonts.css';
import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import BlueLagoon from './pages/BlueLagoon.jsx';
import RetreatHotel from './pages/RetreatHotel.jsx';
import Spa from './pages/Spa.jsx';
import Restaurants from './pages/Restaurants.jsx';
import LavaRestaurant from './pages/LavaRestaurant.jsx';
import BlueCafe from './pages/BlueCafe.jsx';

// import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/BlueLagoon" element={<BlueLagoon />} />
    <Route path="/RetreatHotel" element={<RetreatHotel />} />
    <Route path="/Restaurants" element={<Restaurants />} />
    <Route path="/Spa" element={<Spa />} />
    <Route path="/LavaRestaurant" element={<LavaRestaurant />} />
    <Route path="/BlueCafe" element={<BlueCafe />} />
    {/* <Route path="Accomodation" element={<Accomodation />} />
    <Route path="Dining" element={<Dining />} />  
    <Route path="SkinCare" element={<SkinCare />} /> */}
   
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


