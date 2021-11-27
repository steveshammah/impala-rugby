import { menuLinks } from "../../resources/resources";
import SideBarLink from "./SideBarLink";
import { useState } from "react";

const SubMenu = ({ category }) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <ul className='subMenu'>
      <h4>{category}</h4>
      {menuLinks[category].map((link) => {
        return (
          <SideBarLink
            name={link.name}
            icon={link.icon}
            url={link.url}
            active={activeLink}
            setActiveLink={setActiveLink}
          />
        );
      })}
    </ul>
  );
};

export default SubMenu;
