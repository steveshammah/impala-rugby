import { menuLinks } from "../../resources/resources";
import SideBarLink from "./SideBarLink";

import Link from "next/link";

import React, { useState } from "react";

interface ISubMenuProps {
  category: string;
}

interface IMenu {
  name: string;
  icon: string;
  url: string;
}
export interface IMenuLinks {
  [x: string]: IMenu[];
}

const SubMenu = ({ category }: ISubMenuProps) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="sub-menu">
      <h4>{category}</h4>
      {menuLinks[category].map((link: IMenu) => {
        return (
          <Link href={`/${link.url}`} className="link" passHref>
            <>
              <div key={category}>
                <SideBarLink
                  name={link.name}
                  icon={link.icon}
                  activeLink={activeLink}
                  setActiveLink={setActiveLink}
                />
              </div>
            </>
          </Link>
        );
      })}
    </div>
  );
};

export default SubMenu;
