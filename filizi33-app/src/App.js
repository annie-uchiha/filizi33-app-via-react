import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";

function Application() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;
}

export default Application;

/* Introduction to React.js
- Create React application with header, footer and main js files
- Add style
- Add buttons with simple functionality */
