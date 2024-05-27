import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";
import { useAuth } from "./AuthContext";

function Application() {
  const { userEmail } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!userEmail ? <Login /> : <Navigate to="/landing" />}
      />
      <Route
        path="/landing"
        element={userEmail ? <Landing /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Application;
