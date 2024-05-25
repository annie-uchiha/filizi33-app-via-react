import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="footer-img" alt="Logo" />
      <a href="https://www.filziz33.com" className="footer-link">
        Filizi 33
      </a>
    </div>
  );
}

export default Footer;
