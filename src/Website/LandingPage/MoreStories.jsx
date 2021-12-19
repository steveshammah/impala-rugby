import { photos } from "../../resources/resources";
import "./landing-page.scss";

const MoreStories = () => {
  return (
    <div className='editors-pick'>
      <h2>Editor's Pick</h2>

      <div className='picksWrapper'>
        <div className='picks'>
          <img src={photos.oscarOsir} alt='' />
          <h2>Osir Appointed Head Coach</h2>
        </div>

        <div className='picks'>
          <img src={photos.physio} alt='' />
          <h2>Physio Update</h2>
        </div>

        <div className='picks'>
          <img src={photos.onsomu} alt='' />
          <h2>Transfer News</h2>
        </div>

        <div className='picks'>
          <img src={photos.teamPhoto2} alt='' />
          <h2>Kenya Cup Returns</h2>
        </div>
      </div>
    </div>
  );
};

export default MoreStories;
