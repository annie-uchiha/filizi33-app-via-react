import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";
import Login from "./Login/Login";
import Landing from "./LandingProfilePage/Landing";
import "./theme.scss";
import ThemeToggle from "./ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ThemeToggle />
    <Login />
    <Landing />
    <Footer />
  </React.StrictMode>
);
