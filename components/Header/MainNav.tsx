// import { impalaLogo } from "/assets/images/logos/impalaLogo.png";
import { Box } from "@mui/material";
// import { logos } from "../../resources/resources";
import React, { useRef, Dispatch, SetStateAction } from "react";

interface IBottomNav {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MainNav = ({ menuOpen, setMenuOpen }: IBottomNav) => {
  const burgerNav = useRef<HTMLDivElement>(null);
  const navLinks = [
    {
      name: "News",
      url: "stories",
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

  console.log({ menuOpen });

  return (
    <Box className="main-header">
      <div className="logo">
        <a href="/">
          <img src="" alt="" />
        </a>{" "}
      </div>
      <ul
        className={menuOpen ? "open" : "closed"}
        // style={{ display: menuOpen ? "flex" : "none" }}
      >
        {navLinks.map((link) => (
          <li className={menuOpen ? "open" : undefined}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div
        className={"burger-nav"}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={burgerNav}
      >
        <span></span>
        <span></span>
      </div>
    </Box>
  );
};

export default MainNav;
