import { Container } from "@mui/material";
import { photos } from "../resources/resources";
import StoryBox from "./StoryBox";
import { useContext } from "react";
import { articlesContext } from "../contexts/articles-context";

const LandingSection = () => {
  const { articles } = useContext(articlesContext);
  const latestArticle = articles[0];
  return (
    <div className='website-landing-section'>
      <Container mxWidth='sm' className='main-story'>
        <div className='title-wrapper'>
          <span className='story-type'>{latestArticle.type}</span>
          <h2>{latestArticle.title}</h2>
        </div>
        <div className='main-story-image'>
          <img src={photos.tola} alt='' />
        </div>
      </Container>

      <StoryBox />
    </div>
  );
};

export default LandingSection;
