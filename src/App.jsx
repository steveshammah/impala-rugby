import "./Global.scss";
import { Login } from "./Components/Login/Login";
import { GroupContainer } from "./Components/Groups/GroupContainer";
import { Profile } from "./Components/Profile/Profile";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");

  const logOut = () => {
    setLogin(false);
    setUsername("");
  };

  return (
    <div className='App'>
      <Router>
        <ul>
          <Link to='/'>Home</Link>
          {login ? (
            <a href='/' onClick={() => logOut}>
              Logout
            </a>
          ) : (
            <Link to='/'>Login</Link>
          )}
          <Link to='/groups'>Groups</Link>
          <Link to='/about'>About</Link>
        </ul>

        <h1>Impala Time</h1>

        <LoginContext.Provider
          value={{ login, setLogin, username, setUsername }}>
          <Switch>
            <Route path='/' exact>
              {login ? <Profile /> : <Login />}
            </Route>
            <Route path='/groups'>
              <GroupContainer />
            </Route>
            <Route path='/about'>
              <h1>About Page</h1>
            </Route>
          </Switch>
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
