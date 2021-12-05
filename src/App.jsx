import "./global.scss";
import "./app.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Login from "./components/pages/Login/Login";
import VideoContainer from "./components/pages/Videos/VideoContainer";
import Home from "./components/pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useContext } from "react";
import { appContext } from "./contexts/app-context";
import Teams from "./components/pages/Teams/Teams";
import TeamState from "./contexts/team-context";
import MemberProfile from "./components/pages/MemberProfile/MemberProfile";
import Website from "./Website/Website";

const App = () => {
  // const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeUser } = useContext(appContext);
  const { isAuth, setIsAuth } = activeUser;
  // console.log("Is Auth", isAuth);

  const logOut = () => {
    setIsAuth(false);
  };

  return (
    <div className='app'>
      <Router>
        {/* <Header
          login={isAuth}
          logOut={logOut}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        /> */}
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='homepage'>
          <Switch>
            <Route path='/' exact>
              <Website />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>

            <TeamState className='dashboard-container'>
              <SideBar />
              <Route path='/home' component={Home} />
              <Route path='/teams/:name' component={Teams} />
              <Route path='/players-and-staff/:id' component={MemberProfile} />
              {/* <Route path='/financials/:name' component={Finacials} /> */}
              <Route path='/videos' component={VideoContainer} />
              <Route path='/podcasts' component={VideoContainer} />
              <Route path='/socials' component={VideoContainer} />
              <Route path='/tournament/:league' component={VideoContainer} />
            </TeamState>

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
