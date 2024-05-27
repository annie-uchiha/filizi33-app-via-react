import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";

function Application() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;
}

export default Application;


