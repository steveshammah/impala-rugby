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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          itaque, ipsa asperiores .
        </p>

        <a href='/partners-sponsors' className='btn'>
          VIEW MORE
        </a>
      </div>

      <div className='join-herd'>
        <p>Sign Up to join the Herd for free</p>
        {/* <Button variant='outlined'> */}
        <a href='/partners-sponsors' className='btn'>
          JOIN THE FAMILY
        </a>
        {/* </Button> */}
      </div>
    </div>
  );
};

export default Banner;
