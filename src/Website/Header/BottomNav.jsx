import { logos } from "../../resources/resources";

const BottomNav = () => {
  return (
    <div className='bottom-header'>
      <div className='logo'>
        <img src={logos.impalaLogo} alt='' />
      </div>
      <ul>
        <li>Latest</li>
        <li>Schedule</li>
        <li>Players</li>
        <li>Video</li>
        <li>Standing</li>
        <li>Teams</li>
        <li>
          <a href='/home'>Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
