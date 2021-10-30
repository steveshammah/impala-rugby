import "./Global.scss";
import { Login } from "./Components/Login/Login";
import { GroupContainer } from "./Components/Groups/GroupContainer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [login, setLogin] = useState(true);
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
            <Link onClick={() => logOut}>Logout</Link>
          ) : (
            <Link to='/'>Login</Link>
          )}
          <Link to='/groups'>Groups</Link>
          <Link to='/about'>About</Link>
        </ul>

        <h2>Impala Time</h2>
        {login && <h2>{username}</h2>}
        <span className={`status  ${login && "user-active"}`}></span>

        <LoginContext.Provider
          value={{ login, setLogin, username, setUsername }}>
          <Switch>
            <Route path='/' exact>
              {login ? <GroupContainer /> : <Login />}
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
