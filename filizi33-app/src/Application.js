import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";

function Application() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/landing" />
            )
          }
        />
        <Route
          path="/landing"
          element={
            isLoggedIn ? (
              <Landing userEmail={userEmail} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default Application;
