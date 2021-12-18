import Banner from "./LandingPage/Banner";
import LandingSection from "./LandingPage/LandingSection";
import MatchesContainer from "./LandingPage/MatchesContainer";
import MoreStories from "./LandingPage/MoreStories";
import ShopContainer from "./LandingPage/ShopContainer";
import "./website.scss";
// import ArticlesContext from "../contexts/articles-context";

const Website = () => {
  return (
    <div className='website-home'>
      <LandingSection />
      <Banner />
      <MoreStories />
      <ShopContainer />
      <MatchesContainer />
    </div>
  );
};

export default Website;
