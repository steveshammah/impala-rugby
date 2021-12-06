import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LandingSection from "./LandingSection";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./website.scss";
import StoryPage from "./StoryPage/StoryPage";

const Website = () => {
  return (
    <div className='website-home'>
      <LandingSection />
    </div>
  );
};

export default Website;
