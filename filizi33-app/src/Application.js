import Landing from "./landing";
import Login from "./login";

function Application() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Landing />;
  } else {
    return <Login />;
  }
}

export default Application;
