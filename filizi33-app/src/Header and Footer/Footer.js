import React from "react";
import logo from "../assets/logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-flex">
      <img src={logo} className="footer-img" alt="Logo" />
      <div className="footer-text">
        <a href="https://www.filziz33.com" className="footer-link">
          Filizi 33
        </a>
        <p>filizi33@yahoo.com</p>
        <p>+359 879 52 6036</p>
      </div>
    </footer>
  );
}

export default Footer;
