import { logos } from "../../resources/resources";
import { useRef } from "react";

const BottomNav = ({ menuOpen, setMenuOpen }) => {
  const burgerNav = useRef();

  return (
    <div className='bottom-header'>
      <div className='logo'>
        <a href='/'>
          <img src={logos.impalaLogo} alt='' />
        </a>{" "}
      </div>
      <ul
        style={{
          display: "flex",
          visibility: Boolean(burgerNav) && menuOpen && "visible",
        }}>
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

      <div
        className='burger-nav'
        onClick={() => setMenuOpen(!menuOpen)}
        ref={burgerNav}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BottomNav;
