import { Container } from "@mui/material";
import StoryBox from "./StoryBox";
import { useContext } from "react";
import { articlesContext } from "../../contexts/articles-context";
// import { articlesContext } from "../../contexts/articles-context";

const LandingSection = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  const latestArticle = articles[0];
  return (
    <div className="website-landing-section">
      <Container mxWidth="sm" className="main-story">
        <a href={`/stories/${latestArticle.id}`}>
          <div className="title-wrapper">
            <span className="story-type">{latestArticle.type}</span>
            <h2>{latestArticle.title}</h2>
          </div>
          <div className="main-story-image">
            <img src={latestArticle.image_2} alt="" />
            {/* <img src={BASE_URL + latestArticle.image_2} alt='' /> */}
          </div>
        </a>
      </Container>
      <StoryBox />
    </div>
  );
};

export default LandingSection;
