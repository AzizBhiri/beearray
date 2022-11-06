import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../Images/mainLogo.png";
import "../Styles/Nav.css";
import Tiroirs from "./Tiroirs";
import Beearray from "./Beearray";

function Nav() {
  return (
    <div className="nav">
      <img className="main-logo" src={mainLogo} alt="Logo" />
      <div className="textNav">
        <div className="dropdown">
          <p className="dropbtn">Acceuil</p>
          <div className="dropdown-content">
            <Link to="/Beearray">Bee Array</Link>
            <a>Nos services</a>
          </div>
        </div>
        <div className="dropdown">
          <p className="dropbtn">Produits</p>
          <div className="dropdown-content">
            <a>Colonnes tiroirs</a>
            <Link to="/Tiroirs">Tiroirs</Link>
            <a>Façades</a>
            <a>Pièces détachées</a>
          </div>
        </div>
        <p className="dropbtn">Nouveautés</p>
        <p className="dropbtn">Contact</p>
      </div>
      <div className="menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Nav;
