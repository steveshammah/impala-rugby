import { Visibility } from "@material-ui/icons";
import { profile } from "../../../../../resources/resources";
import "../widgets.scss";

const WidgetSm = () => {
  return (
    <div className='widget-small'>
      <h2>Player Consistency</h2>

      <div className='player-info'>
        <div className='player-image'>
          <img src={profile} alt='' />
        </div>
        <div className='player-meta'>
          <h3>Ule Msee</h3>
          <span className='consistent'>Ratio : 3 / 3</span>
          <span className='consistent'>
            <i>Last training session: </i>
            <strong>Yesterday</strong>
          </span>
        </div>
        <div className='player-toggle'>
          <i>View Profile</i> <Visibility className='icon' />
        </div>
      </div>

      <div className='player-info'>
        <div className='player-image'>
          <img src={profile} alt='' />
        </div>
        <div className='player-meta'>
          <h3>Jane Doe</h3>
          <span className='good'>Ratio : 2 / 3</span>
          <span className='good'>
            <i>Last training session: </i>
            <strong>Yesterday</strong>
          </span>
        </div>
        <div className='player-toggle'>
          <i>View Profile</i> <Visibility className='icon' />
        </div>
      </div>

      <div className='player-info'>
        <div className='player-image'>
          <img src={profile} alt='' />
        </div>
        <div className='player-meta'>
          <h3>John Doe</h3>
          <span className='good'>Ratio : 2 / 3</span>
          <span className='good'>
            <i>Last training session: </i>
            <strong>Monday</strong>
          </span>
        </div>
        <div className='player-toggle'>
          <i>View Profile</i> <Visibility className='icon' />
        </div>
      </div>

      <div className='player-info'>
        <div className='player-image'>
          <img src={profile} alt='' />
        </div>
        <div className='player-meta'>
          <h3>Mr Man</h3>
          <span className='inconsistent'>Ratio : 1 / 3</span>
          <span className='inconsistent'>
            <i>Last training session: </i>
            <strong>Last Week</strong>
          </span>
        </div>
        <div className='player-toggle'>
          <i>View Profile</i> <Visibility className='icon' />
        </div>
      </div>

      <div className='player-info'>
        <div className='player-image'>
          <img src={profile} alt='' />
        </div>
        <div className='player-meta'>
          <h3>Steve Shammah</h3>
          <span className='inconsistent'>Ratio : 1 / 3</span>
          <span className='inconsistent'>
            <i>Last training session: </i>
            <strong>2 Weeks ago</strong>
          </span>
        </div>
        <div className='player-toggle'>
          <i>View Profile</i> <Visibility className='icon' />
        </div>
      </div>
    </div>
  );
};

export default WidgetSm;
