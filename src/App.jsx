import "./global.scss";
import "./app.scss";
// import Menu from "./components/Menu/Menu";
import Login from "./components/pages/Login/Login";
import VideoContainer from "./components/pages/Videos/VideoContainer";
import Home from "./components/pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Teams from "./components/pages/Teams/Teams";
import TeamState from "./contexts/team-context";
import MemberProfile from "./components/pages/MemberProfile/MemberProfile";
import Website from "./Website/Website";
import Header from "./Website/Header/Header";
import StoryPage from "./Website/StoryPage/StoryPage";
import Footer from "./Website/Footer/Footer";
import StoryFeed from "./Website/StoryPage/StoryFeed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleState from "./contexts/articles-context";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          {/* Access to all articles */}
          <ArticleState>
            <Route path='/' exact component={Website} />
            <Route path='/feed/stories' component={StoryFeed} />
            <Route path='/stories/:id' component={StoryPage} />
          </ArticleState>

          
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
