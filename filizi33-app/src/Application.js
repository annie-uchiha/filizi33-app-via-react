import Header from "./header";
import Main from "./main";
import Landing from "./Landing/landing";
import Login from "./Login/login";

function Application() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <landing />}</div>;
}

export default Application;
