// import { impalaLogo } from "/assets/images/logos/impalaLogo.png";

import { logos } from "../../resources/resources";
import { useRef, Dispatch, SetStateAction } from "react";

interface IBottomNav {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const BottomNav = ({ menuOpen, setMenuOpen }: IBottomNav) => {
  const burgerNav = useRef<HTMLDivElement>(null);
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
          <img src="" alt="" />
        </a>{" "}
      </div>
      <ul
        style={{
          display: "flex",
          visibility: Boolean(burgerNav) && menuOpen ? "visible" : "hidden",
        }}
      >
        {navLinks.map((link) => (
          <li
            style={{
              visibility: Boolean(burgerNav) && menuOpen ? "visible" : "hidden",
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
