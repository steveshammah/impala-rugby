import "./global.scss";
import "./app.scss";
// import Menu from "./components/Menu/Menu";
import Login from "./components/pages/Login/Login";
import VideoContainer from "./components/pages/Videos/VideoContainer";
import Home from "./components/pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useContext, Fragment } from "react";
import { appContext } from "./contexts/app-context";
import Teams from "./components/pages/Teams/Teams";
import TeamState from "./contexts/team-context";
import MemberProfile from "./components/pages/MemberProfile/MemberProfile";
import Website from "./Website/Website";
import Header from "./Website/Header/Header";
import StoryPage from "./Website/StoryPage/StoryPage";
import Footer from "./Website/Footer/Footer";

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
        {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Header />

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/' exact component={Website} />
          <Route path='/stories/:id' component={StoryPage} />
          <div className='dashboard-home'>
            <TeamState className='dashboard-container'>
              <SideBar />
              <Route path='/dashboard/home' component={Home} />
              <Route path='/teams/:name' component={Teams} />
              <Route path='/players-and-staff/:id' component={MemberProfile} />
              {/* <Route path='/financials/:name' component={Finacials} /> */}
              <Route path='/videos' component={VideoContainer} />
              <Route path='/podcasts' component={VideoContainer} />
              <Route path='/socials' component={VideoContainer} />
              <Route path='/tournament/:league' component={VideoContainer} />
            </TeamState>
          </div>

          <Route path='/about' component={Website}></Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
