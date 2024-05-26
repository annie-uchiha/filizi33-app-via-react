import React from "react";
import logo from "../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header-flex">
      <img src={logo} className="header-img" alt="Logo" />
      <h1 className="header-title">Filizi 33</h1>
    </header>
  );
}

export default Header;
