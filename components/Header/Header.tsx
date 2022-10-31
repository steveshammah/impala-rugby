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
    // {
    //   name: "Shop",
    //   url: "/shop",
    // },
    {
      name: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <header className="header shadow-md">
      <div className="flex flex-col w-full ">
        <MainNav
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          navLinks={navLinks}
        />
        <SubNav />
      </div>
    </header>
  );
};

export default Header;
