import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header-img" alt="Logo" />
      <h1 className="header-title">Filizi 33</h1>
    </div>
  );
}

export default Header;
