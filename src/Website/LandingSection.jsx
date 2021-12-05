import { Box, Button, Container } from "@mui/material";
import { photos } from "../resources/resources";

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

      <Container className='home-more-stories'>
        <Box className='home-story'>
          <img src={photos.player18} alt='' />
          <div className='home-story-text'>
            <span className='story-type'>NEWS</span>
            <p>
              'It's terrible' - Mr Man Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </Box>

        <Box className='home-story'>
          <img src={photos.munai} alt='' />

          <div className='home-story-text'>
            <span className='story-type'>REPORT</span>
            <p>
              Mr Man Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </Box>

        <Box className='home-story'>
          <img src={photos.ajo} alt='' />
          <div className='home-story-text'>
            <span className='story-type'>NEWS</span>
            <p>
              ESS: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis.
            </p>
          </div>
        </Box>

        <Box className='home-story'>
          <img src={photos.solido} alt='' />

          <div className='home-story-text'>
            <span className='story-type'>REPORT</span>
            <p>
              Captain remarks on Solido : Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Et, numquam sequi!
            </p>
          </div>
        </Box>

        <Box className='home-story'>
          <img src={photos.soi} alt='' />
          <div className='home-story-text'>
            <span className='story-type'>NEWS</span>
            <p>
              'Soi' -Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Box>

        <Box className='home-story'>
          <img src={photos.teamPhoto} alt='' />
          <div className='home-story-text'>
            <span className='story-type'>REPORT</span>
            <p>
              ' Mr Man Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Box>
        <Button variant='contained'>View latest news</Button>
      </Container>
    </div>
  );
};

export default LandingSection;
