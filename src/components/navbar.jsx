import React from "react";
import "./nav.css";
import { FiGlobe } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="logo"
        />
      </div>
      <div className="nav-comp">
        <p className="host">Become a host</p>
        <p>
         { <select name="cars" id="cars">
          <option value="english">&#xf0ac;</option> 
            <option value="english">
              <FiGlobe />
              &nbsp;English(Us)
            </option>
            <option value="saab">$ USD</option>
          </select>}
        </p>
        
        <p>dropdown</p>
      </div>
    </div>
  );
}
