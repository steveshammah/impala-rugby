import { logos } from "../../resources/resources";
import { useRef } from "react";

const BottomNav = ({ menuOpen, setMenuOpen }) => {
  const burgerNav = useRef();
  const navLinks = [
    {
      name: "News",
      url: "feed/stories",
    },
    {
      name: "Squads",
      url: "squads",
    },
    {
      name: "Store",
      url: "store",
    },
    {
      name: "Dashboard",
      url: "dashboard/home",
    },
  ];

  return (
    <div className="bottom-header">
      <div className="logo">
        <a href="/">
          <img src={logos.impalaLogo} alt="" />
        </a>{" "}
      </div>
      <ul
        style={{
          display: "flex",
          visibility: Boolean(burgerNav) && menuOpen && "visible",
        }}
      >
        {navLinks.map((link) => (
          <li
            style={{
              visibility: Boolean(burgerNav) && menuOpen && "visible",
            }}
          >
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div
        className="burger-nav"
        onClick={() => setMenuOpen(!menuOpen)}
        ref={burgerNav}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BottomNav;
