import { menuLinks } from "../../resources/resources";
import SideBarLink from "./SideBarLink";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

import List from "@mui/material/List";

import { useState } from "react";

const SubMenu = ({ category }) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <List className="sub-menu">
      <h4>{category}</h4>
      {menuLinks[category].map((link) => {
        return (
          <Link href={`/${link.url}`} className="link" passHref>
            <>
              <ListItem button key={category}>
                <SideBarLink
                  name={link.name}
                  icon={link.icon}
                  active={activeLink}
                  setActiveLink={setActiveLink}
                />
              </ListItem>
            </>
          </Link>
        );
      })}
    </List>
  );
};

export default SubMenu;
