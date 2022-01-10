import { logos } from "../../resources/resources";

const BottomNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className='bottom-header'>
      <div className='logo'>
        <a href='/'>
          <img src={logos.impalaLogo} alt='' />
        </a>{" "}
      </div>
      <ul style={{ display: menuOpen ? "flex" : "none" }}>
        <li>
          <a href='/feed/stories'>News</a>
        </li>

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

      <div className='burger-nav' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BottomNav;
