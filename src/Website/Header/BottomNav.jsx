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
          <a href='/latest-news'>Latest</a>
        </li>

        {/* <li>
          <a href='/events/tickets'>tickets</a>
        </li> */}
        <li>
          <a href='/membership'>membership</a>
        </li>

        <li>
          <a href='/squads'>squads</a>
        </li>
        <li>
          <a href='/fixtures'>fixtures</a>
        </li>
        {/* <li>
          <a href='/shop'>shop</a>
        </li> */}
        <li>
          <a href='/dashboard/home'>Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
