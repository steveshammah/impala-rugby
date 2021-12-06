import { Container } from "@mui/material";
import { photos } from "../resources/resources";
import StoryBox from "./StoryBox";

const LandingSection = () => {
  return (
    <div className='website-landing-section'>
      <Container mxWidth='sm' className='main-story'>
        <div className='title-wrapper'>
          <span className='story-type'>FEATURE</span>
          <h2>
            5 things we learned from the pre-season friendlies held at impala
          </h2>
        </div>
        <div className='main-story-image'>
          <img src={photos.phonto} alt='' />
        </div>
      </Container>

      <StoryBox />
    </div>
  );
};

export default LandingSection;
