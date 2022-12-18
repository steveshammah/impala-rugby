import React from "react";
import Banner from "@components/LandingPage/Banner";
import CardsWrapper from "@components/LandingPage/CardsWrapper";
import LandingSection from "@components/LandingPage/LandingSection";
import MoreStories from "@components/LandingPage/MoreStories";
import VideoContainer from "@components/VideoContainer";

const Home = () => {
  const title = "Match Day Captain speaks after DU Falcons defeat";
  const videoId = "https://www.youtube.com/embed/EYDtKmn7Cu0";

  return (
    <div className="website-home">
      <LandingSection />
      <Banner />
      <CardsWrapper items={"Shop"} />
      <VideoContainer title={title} videoId={videoId} />
      <MoreStories />
      <CardsWrapper items={"Matches"} />
    </div>
  );
};

export default Home;
