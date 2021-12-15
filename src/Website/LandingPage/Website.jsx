import Banner from "./Banner";
import LandingSection from "./LandingSection";
import MatchesContainer from "./MatchesContainer";
import MoreStories from "./MoreStories";
import ShopContainer from "./ShopContainer";
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
