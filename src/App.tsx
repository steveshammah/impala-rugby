import "./global.scss";
import "./app.scss";
// import Menu from "./components/Menu/Menu";
// import Login from "../pages/login";
// import Home from "../pages";
// import Header from "./components/Header/Header";
// import VideoContainer from "../pages/Videos/VideoContainer";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import SideBar from "./components/SideBar/SideBar";
// import Teams from "../pages/teams/Teams";

// import MemberProfile from "../pages/MemberProfile/MemberProfile";
// import Store from "../pages/Store/Store";
// import Product from "../pages/Store/Product";
// import AllSponsors from "../pages/Sponsors/AllSponsors";
// import Partner from "../pages/Sponsors/Partner";
// import StoryPage from "../pages/stories/[id]";
// import Footer from "./components/Footer/Footer";
// import StoryFeed from "../pages/stories";
// import ArticlesFeed from "../pages/Dashboard/Articles/ArticlesFeed";


// import CreateArticle from "../pages/Dashboard/Articles/CreateArticle";
// import EditArticle from "../pages/Dashboard/Articles/EditArticle";
// import Squads from "../pages/squads";
// import MatchCenter from "../pages/MatchCenter/MatchCenter";
// import MatchReview from "../pages/MatchCenter/MatchReview";

const App = () => {
  return (
    <div className="app">

      {/* <Header /> */}
      {/* 
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact component={Home} />

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

          <div className="dashboard-home">
            <SideBar />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/teams/:name" component={Teams} />

            
            <Route path="/dashboard/articles/" component={ArticlesFeed} />
            <Route path="/admin/create-article/" component={CreateArticle} />
            <Route path="/admin/edit-article/:id" component={EditArticle} />

            <Route path="/videos" component={VideoContainer} />
            <Route path="/podcasts" component={VideoContainer} />
            <Route path="/socials" component={VideoContainer} />
            <Route path="/tournament/:league" component={VideoContainer} />
          </div>

          <Route path="/about" component={Home}></Route>
        </Switch>

        <Footer />
      </Router> */}
    </div>
  );
};

export default App;
