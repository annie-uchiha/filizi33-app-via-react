import React from "react";
import logo from "../assets/logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-flex">
      <img src={logo} className="footer-img" alt="Logo" />
      <a href="https://www.filziz33.com" className="footer-link">
        Filizi 33
      </a>
    </footer>
  );
}

export default Footer;
