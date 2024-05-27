import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";
import { useAuth } from "./AuthContext";

const OnlineCourses = {
  OnlineCourse1: React.lazy(() => import("./online-courses/OnlineCourse1")),
  OnlineCourse2: React.lazy(() => import("./online-courses/OnlineCourse2")),
  OnlineCourse3: React.lazy(() => import("./online-courses/OnlineCourse3")),
  OnlineCourse4: React.lazy(() => import("./online-courses/OnlineCourse4")),
  OnlineCourse5: React.lazy(() => import("./online-courses/OnlineCourse5")),
  OnlineCourse6: React.lazy(() => import("./online-courses/OnlineCourse6")),
};

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
      {/* Add routes for online courses */}
      <Route
        path="/courses/:id"
        element={({ id }) => {
          const OnlineCourseComponent = OnlineCourses[`OnlineCourse${id}`];
          return OnlineCourseComponent ? (
            <React.Suspense fallback={<div>Loading...</div>}>
              <OnlineCourseComponent />
            </React.Suspense>
          ) : (
            <Navigate to="/landing" />
          );
        }}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Application;
