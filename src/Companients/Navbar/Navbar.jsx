import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h2>AutoZoom</h2>
      </div>
      <nav className="navbar_links">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <HomeIcon /> Dashboard
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <SettingsIcon /> Settings
        </NavLink>
        <NavLink 
          to="/brends" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <BreakfastDiningIcon /> Brands
        </NavLink>
        <NavLink 
          to="/modules" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <ChromeReaderModeIcon /> Models
        </NavLink>
        <NavLink 
          to="/location" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <FmdGoodIcon /> Locations
        </NavLink>
        <NavLink 
          to="/cities" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <LocationCityIcon /> Cities
        </NavLink>
        <NavLink 
          to="/cars" 
          className={({ isActive }) => isActive ? "link active" : "link"}
        >
          <DirectionsCarIcon /> Cars
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
