import "./global.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Login from "./components/Login/Login";
import GroupContainer from "./components/Groups/GroupContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useContext } from "react";
import { appContext } from "./contexts/app-context";

function App() {
  // const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeUser } = useContext(appContext);
  const { isAuth, setIsAuth } = activeUser;
  console.log("Is Auth", isAuth);

  const logOut = () => {
    setIsAuth(false);
  };

  return (
    <div className='App'>
      <Router>
        <Header
          login={isAuth}
          logOut={logOut}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/groups'>
            <GroupContainer />
          </Route>
          <Route path='/about'>
            <h1>About Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
