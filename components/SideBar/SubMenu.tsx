import { menuLinks } from "@public/resources/resources";
import SideBarLink from "./SideBarLink";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdDashboard } from "react-icons/md";

interface ISubMenuProps {
  menuOpen: boolean;
  collapsed: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

interface Link {
  label: string;
  icon: string;
  url: string;
}
interface IMenu extends Link {
  subLinks: Link[];
}
export interface IMenuLinks {
  [x: string]: IMenu[];
}

const SubMenu = ({ menuOpen, setMenuOpen, collapsed }: ISubMenuProps) => {
  const [activeLink, setActiveLink] = useState<string>("Dashboard");
  const handleClick = (link: IMenu) => {
    setActiveLink(link.label);
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`sub-menu  flex flex-col p-2 justify-around w-full transition-all ease-in-out `}
    >
      {menuLinks.map((link: IMenu, index: number) => {
        return (
          <div
            key={index}
            className={`p-1 ${
              activeLink === link.label && menuOpen
                ? "bg-whiteX rounded-md"
                : ""
            } `}
          >
            <div
              className={`flex justify-evenly items-center cursor-pointer w-full`}
              onClick={() => handleClick(link)}
            >
              <MdDashboard className=" text-primaryRed" />
              <h4
                className={`${
                  collapsed ? "hidden" : "initial"
                } text-primaryRed uppercase text-sm`}
              >
                {link.label} 
              </h4>
            </div>
            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } w-full flex-col justify-center items-center`}
            >
              {link.subLinks.map((sub, index) => (
                <SideBarLink
                  link={sub}
                  activeLink={activeLink}
                  setActiveLink={() => setActiveLink(link.label)}
                  key={index}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;

// className={`${
//               activeLink === link.label && menuOpen ? "flex" : "hidden"
//             } flex-col bg-whiteX rounded-md`}
