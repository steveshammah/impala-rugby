import Banner from "./LandingPage/Banner";
import CardsWrapper from "./LandingPage/CardsWrapper";
import LandingSection from "./LandingPage/LandingSection";
import MoreStories from "./LandingPage/MoreStories";
import "./home.scss";

const Home = () => {
  return (
    <div className="website-home">
      <LandingSection />
      <Banner />
      <CardsWrapper items={"Shop"} />
      <MoreStories />
      <CardsWrapper items={"Matches"} />
    </div>
  );
};

export default Home;
