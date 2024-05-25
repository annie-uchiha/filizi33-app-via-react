import Landing from "./LandingProfilePage/Landing";
import Login from "./Login/Login";

function Application() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <landing />}</div>;
}

export default Application;


export default App;

/* Introduction to React.js
- Create React application with header, footer and main js files
- Add style
- Add buttons with simple functionality */
