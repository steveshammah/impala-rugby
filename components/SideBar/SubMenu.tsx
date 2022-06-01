import { menuLinks } from "../../resources/resources";
import SideBarLink from "./SideBarLink";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import List from "@mui/material/List";
import { useState } from "react";

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
    <List className="sub-menu">
      <h4>{category}</h4>
      {menuLinks[category].map((link: IMenu) => {
        return (
          <Link href={`/${link.url}`} className="link" passHref>
            <>
              <ListItem button key={category}>
                <SideBarLink
                  name={link.name}
                  icon={link.icon}
                  activeLink={activeLink}
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
