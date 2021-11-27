import "./global.scss";
import "./app.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Login from "./components/pages/Login/Login";
import GroupContainer from "./components/pages/Groups/GroupContainer";
import Home from "./components/pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useContext, Fragment } from "react";
import { appContext } from "./contexts/app-context";
import Teams from "./components/pages/Teams/Teams";

const App = () => {
  // const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeUser } = useContext(appContext);
  const { isAuth, setIsAuth } = activeUser;
  console.log("Is Auth", isAuth);

  const logOut = () => {
    setIsAuth(false);
  };

  return (
    <div className='app'>
      <Router>
        <Header
          login={isAuth}
          logOut={logOut}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='homepage'>
          <Switch>
            <Route path='/' exact>
              <Login />
            </Route>
            <Fragment className='dashboard-container'>
              <SideBar />
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/groups'>
                <GroupContainer />
              </Route>
              <Route path='/teams/:name' component={Teams} />
            </Fragment>

            <Route path='/about'>
              <h1>About Page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
