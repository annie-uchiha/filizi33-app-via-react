import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";
import { useAuth } from "./AuthContext";
import OnlineCourse1 from "./online-courses/OnlineCourse1";
import OnlineCourse2 from "./online-courses/OnlineCourse2";
import OnlineCourse3 from "./online-courses/OnlineCourse3";
import OnlineCourse4 from "./online-courses/OnlineCourse4";
import OnlineCourse5 from "./online-courses/OnlineCourse5";
import OnlineCourse6 from "./online-courses/OnlineCourse6";

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
      <Route path="/courses/1" element={<OnlineCourse1 />} />
      <Route path="/courses/2" element={<OnlineCourse2 />} />
      <Route path="/courses/3" element={<OnlineCourse3 />} />
      <Route path="/courses/4" element={<OnlineCourse4 />} />
      <Route path="/courses/5" element={<OnlineCourse5 />} />
      <Route path="/courses/6" element={<OnlineCourse6 />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Application;
