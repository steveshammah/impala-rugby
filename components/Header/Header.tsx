import React from "react";
import { useState } from "react";
import MainNav from "./MainNav";
import SubNav from "./SubNav";

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false);
  const navLinks = [
    {
      name: "News",
      url: "/stories",
    },
    {
      name: "Squads",
      url: "/squads",
    },
    {
      name: "Fixtures",
      url: "/fixtures",
    },
    {
      name: "Shop",
      url: "#",
    },
    {
      name: "Partners",
      url: "/partners",
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      private: true,
    },
  ];

  return (
    <div>
      <header className="header w-full shadow-md">
        <div className="flex flex-col w-full fixed top-0 z-50 ">
          <MainNav
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            navLinks={navLinks}
          />
          <SubNav />
        </div>
      </header>
    </div>
  );
};

export default Header;
