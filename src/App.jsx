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
import Store from "./Website/Store/Store";
import Product from "./Website/Store/Product";
import Tickets from "./Website/Tickets/Tickets";
import Website from "./Website/Website";
import Header from "./Website/Header/Header";
import StoryPage from "./Website/StoryPage/StoryPage";
import Footer from "./Website/Footer/Footer";
import StoryFeed from "./Website/StoryPage/StoryFeed";
import ArticlesFeed from "./components/pages/Home/Articles/ArticlesFeed";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import ArticleState from "./contexts/articles-context";
import CreateArticle from "./components/pages/Home/Articles/CreateArticle";
import EditArticle from "./components/pages/Home/Articles/EditArticle";
import Squads from "./Website/Squads/Squads";
import MatchCenter from "./Website/MatchCenter/MatchCenter";
import MatchReview from "./Website/MatchCenter/MatchReview";

const App = () => {
  return (
    <div className='app'>
      <ArticleState>
        <Router>
          <Header />

          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/' exact component={Website} />

            {/* Redirect all paths not defined to home page */}
            {/* <Route path='*'>
              <Redirect to='/' />
            </Route> */}
            <Route path='/feed/stories' component={StoryFeed} />
            <Route path='/stories/:id' component={StoryPage} />
            <Route path='/squads' component={Squads} />
            <Route path='/match-center' component={MatchCenter} />
            <Route path='/match-review/:team/:id' component={MatchReview} />
            <Route path='/players-and-staff/:id' component={MemberProfile} />
            <Route path='/shop' exact component={Store} />
            <Route path='/shop/:id' component={Product} />
            <Route path='/tickets/' component={Tickets} />

            <TeamState className='dashboard-container'>
              <div className='dashboard-home'>
                <SideBar />
                <Route path='/dashboard/home/' exact component={Home} />
                <Route path='/teams/:name' component={Teams} />

                {/* <Route path='/financials/:name' component={Finacials} /> */}
                <Route path='/dashboard/articles/' component={ArticlesFeed} />
                <Route
                  path='/admin/create-article/'
                  component={CreateArticle}
                />
                <Route path='/admin/edit-article/:id' component={EditArticle} />

                <Route path='/videos' component={VideoContainer} />
                <Route path='/podcasts' component={VideoContainer} />
                <Route path='/socials' component={VideoContainer} />
                <Route path='/tournament/:league' component={VideoContainer} />
              </div>
            </TeamState>

            <Route path='/about' component={Website}></Route>
          </Switch>

          <Footer />
        </Router>
      </ArticleState>
    </div>
  );
};

export default App;
