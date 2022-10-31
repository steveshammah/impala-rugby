import { menuLinks } from "../../resources/resources";
import SideBarLink from "./SideBarLink";
import Link from "next/link";

import React, { useState } from "react";

const SubMenu = ({ category }) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <List className="sub-menu">
      <h4>{category}</h4>
      {menuLinks[category].map((link) => {
        return (
          <Link href={`/${link.url}`} className="link" passHref>
            <>
              <div button key={category}>
                <SideBarLink
                  name={link.name}
                  icon={link.icon}
                  active={activeLink}
                  setActiveLink={setActiveLink}
                />
              </div>
            </>
          </Link>
        );
      })}
    </List>
  );
};

export default SubMenu;
