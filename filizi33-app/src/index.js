import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Application";
import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";
import "./theme.scss";
import ThemeToggle from "./ThemeToggle";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Header />
        <ThemeToggle />
        <Application />
        <Footer />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
