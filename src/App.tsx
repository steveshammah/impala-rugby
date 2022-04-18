import "./global.scss";
import "./app.scss";
// import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import VideoContainer from "./pages/Videos/VideoContainer";
import Dashboard from "./pages/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import Teams from "./pages/Teams/Teams";
import TeamState from "./contexts/team-context";
import MemberProfile from "./pages/MemberProfile/MemberProfile";
import Store from "./pages/Store/Store";
import Product from "./pages/Store/Product";
import AllSponsors from "./pages/Sponsors/AllSponsors";
import Partner from "./pages/Sponsors/Partner";
import StoryPage from "./pages/StoryPage/StoryPage";
import Footer from "./components/Footer/Footer";
import StoryFeed from "./pages/StoryPage/StoryFeed";
import ArticlesFeed from "./pages/Dashboard/Articles/ArticlesFeed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleState from "./contexts/articles-context";
import CreateArticle from "./pages/Dashboard/Articles/CreateArticle";
import EditArticle from "./pages/Dashboard/Articles/EditArticle";
import Squads from "./pages/Squads/Squads";
import MatchCenter from "./pages/MatchCenter/MatchCenter";
import MatchReview from "./pages/MatchCenter/MatchReview";

const App = () => {
  return (
    <div className="app">
      <ArticleState>
        <Router>
          <Header />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact component={Home} />

            {/* Redirect all paths not defined to home page */}
            {/* <Route path='*'>
              <Redirect to='/' />
            </Route> */}
            <Route path="/feed/stories" component={StoryFeed} />
            <Route path="/stories/:id" component={StoryPage} />
            <Route path="/squads" component={Squads} />
            <Route path="/match-center" component={MatchCenter} />
            <Route path="/match-review/:team/:id" component={MatchReview} />
            <Route path="/players-and-staff/:id" component={MemberProfile} />
            <Route path="/store" exact component={Store} />
            <Route path="/store/:id" component={Product} />
            <Route path="/partners-sponsors/" exact component={AllSponsors} />
            <Route path="/partners-sponsors/:partner" component={Partner} />

            <TeamState className="dashboard-container">
              <div className="dashboard-home">
                <SideBar />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/teams/:name" component={Teams} />

                {/* <Route path='/financials/:name' component={Finacials} /> */}
                <Route path="/dashboard/articles/" component={ArticlesFeed} />
                <Route
                  path="/admin/create-article/"
                  component={CreateArticle}
                />
                <Route path="/admin/edit-article/:id" component={EditArticle} />

                <Route path="/videos" component={VideoContainer} />
                <Route path="/podcasts" component={VideoContainer} />
                <Route path="/socials" component={VideoContainer} />
                <Route path="/tournament/:league" component={VideoContainer} />
              </div>
            </TeamState>

            <Route path="/about" component={Home}></Route>
          </Switch>

          <Footer />
        </Router>
      </ArticleState>
    </div>
  );
};

export default App;
