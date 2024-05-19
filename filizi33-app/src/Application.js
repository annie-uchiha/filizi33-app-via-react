import Landing from "..src/Landing/landing";
import Login from "..src/Login/login";

function Application() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <landing />}</div>;
}

export default Application;
