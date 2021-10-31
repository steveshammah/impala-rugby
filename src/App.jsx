import "./Global.scss";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import { Login } from "./Components/Login/Login";
import { GroupContainer } from "./Components/Groups/GroupContainer";
import { Profile } from "./Components/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const logOut = () => {
    setLogin(false);
    setUsername("");
  };

  return (
    <div className='App'>
      <Router>
        <Header
          login={login}
          logOut={logOut}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
