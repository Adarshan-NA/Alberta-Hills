import React,{ useState } from 'react'
import {Outlet} from "react-router-dom";
import NavBarBlack from './NavBarBlack';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import DayVisit from './DayVisit';


function HomePage() {


  return (
    <div>
      <NavBarBlack />
      <HeroSection />
      <CardSection />
      <DayVisit />
      <Outlet />
    </div>
  )
}

export default HomePage
