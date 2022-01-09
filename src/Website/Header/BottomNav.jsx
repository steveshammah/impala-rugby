import { logos } from "../../resources/resources";

const BottomNav = () => {
  return (
    <div className='bottom-header'>
      <div className='logo'>
        <a href='/'>
          <img src={logos.impalaLogo} alt='' />
        </a>{" "}
      </div>
      <ul>
        <li>
          <a href='/feed/stories'>News</a>
        </li>

        {/* <li>
          <a href='/events/tickets'>tickets</a>
        </li> */}

        <li>
          <a href='/squads'>squads</a>
        </li>
        <li>
          <a href='/match-center'>fixtures</a>
        </li>
        <li>
          <a href='/shop'>shop</a>
        </li>
        <li>
          <a href='/partners-sponsors'>Sponsors</a>
        </li>
        <li>
          <a href='/dashboard/home'>Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
