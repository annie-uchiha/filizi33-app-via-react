import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login/Login";
import Landing from "./LandingProfilePage/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Landing />
    <Footer />
  </React.StrictMode>
);
