import { photos } from "../../../public/resources/resources";
import "./landing-page.scss";

const MoreStories = () => {
  return (
    <div className='editors-pick'>
      <h2>Editor's Pick</h2>

      <div className='picksWrapper'>
        <a href='/stories/18' className='picks'>
          <img src={photos.coding} alt='' />
          <h3>Website Built By Shammah</h3>
        </a>

        <a href='/stories/2' className='picks'>
          <img src={photos.oscarOsir} alt='' />
          <h3>Osir Appointed Head Coach</h3>
        </a>

        <a href='/stories/13' className='picks'>
          <img src={photos.onsomu} alt='' />
          <h3>Transfer News</h3>
        </a>

        <a href='/stories/10' className='picks'>
          <img src={photos.rilSponsorPhoto} alt='' />
          <h3>Resolution Now</h3>
        </a>
      </div>
    </div>
  );
};

export default MoreStories;
