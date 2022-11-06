import React, { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import SubMenu from "./SubMenu";

const SideBar = () => {
  const categories: string[] = ["dashboard", "league", "teams", "website"];
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    // setMenuOpen((prev) => (prev ? false : prev));
  };

  return (
    <div
      className={`side-bar-links h-screen relative -top-24 pt-24 pb-6 flex flex-col items-center justify-between ${
        collapsed ? "w-16" : "w-44"
      } bg-blackX`}
    >
      <SubMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        collapsed={collapsed}
      />

      <button
        className="flex text-whiteX items-center w-4/5 justify-center  p-1 border-slate-50 rounded-md border-2 shadow-md "
        onClick={handleCollapse}
      >
        <div className={`${collapsed ? "hidden" : "flex items-center"} `}>
          <BsArrowBarLeft className="text-2xl" />
          <span className="text-sm">Collapse</span>
        </div>
        <BsArrowBarRight className={`${!collapsed ? "hidden" : "flex"}`} />
      </button>
    </div>
  );
};

export default SideBar;
