import React from "react";

// CSS

import "../styles/components/Navbar.css";

// Images

import EpicGamesLogo from "../assets/images/epic-games-logo.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img className="logo" src={EpicGamesLogo} />
      </div>
      <ul className="navbar_list">
        <li>STORE</li>
        <li>NEWS</li>
        <li>FAQ</li>
        <li>HELP</li>
        <li>UNREAL ENGINE</li>
        <div className="divider"></div>
        <li> ABOUT EPIC</li>
      </ul>
      <div className="sign-in">
        <li>SIGN IN</li>
      </div>
      <div className="get-epic-games">
        <li>GET EPIC GAMES</li>
      </div>
    </div>
  );
};

export default Navbar;
