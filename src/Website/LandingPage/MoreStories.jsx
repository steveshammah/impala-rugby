import { photos } from "../../resources/resources";
import "./landing-page.scss";

const MoreStories = () => {
  return (
    <div className='editors-pick'>
      <h2>Editor's Pick</h2>

      <div className='picksWrapper'>
        <a href='/stories/18' className='picks'>
          <img src={photos.coding} alt='' />
          <h2>Website Built By Shammah</h2>
        </a>

        <a href='/stories/2' className='picks'>
          <img src={photos.oscarOsir} alt='' />
          <h2>Osir Appointed Head Coach</h2>
        </a>

        <a href='/stories/13' className='picks'>
          <img src={photos.onsomu} alt='' />
          <h2>Transfer News</h2>
        </a>

        <a href='/stories/10' className='picks'>
          <img src={photos.rilSponsorPhoto} alt='' />
          <h2>Resolution Now</h2>
        </a>
      </div>
    </div>
  );
};

export default MoreStories;
