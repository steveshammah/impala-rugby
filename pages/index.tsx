import React from "react";
import Banner from "@components/LandingPage/Banner";
import CardsWrapper from "@components/LandingPage/CardsWrapper";
import LandingSection from "@components/LandingPage/LandingSection";
import MoreStories from "@components/LandingPage/MoreStories";

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
