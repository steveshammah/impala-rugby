import { Button } from "@mui/material";
import "./landing-page.scss";
import { photos } from "../../resources/resources";

const Banner = () => {
  return (
    <div className='banner'>
      <div className='imageWrapper'>
        <img src={photos.impalaBlaze} alt='' />
      </div>
      <div className='textWrapper'>
        <h2>#MACHOREDSINCE</h2>

        <p>
          You'll never forget the moment you realised Impala was the club for
          you.
        </p>

        <Button variant='contained' className='btn'>
          <a href='/membership'>VIEW MORE</a>
        </Button>
      </div>

      <div className='join-herd'>
        <p>Sign Up to join the Herd for free</p>
        <Button variant='outlined' className='btn'>
          <a href='/membership'>JOIN THE FAMILY</a>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
