import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
interface ISideBarLinkProps {
  link: any;
  activeLink: string;
  collapsed: boolean;
  setActiveLink: Dispatch<SetStateAction<string>>;
}
import {
  MdHome,
  MdCalendarToday,
  MdSportsRugby,
  MdPeople,
  MdArticle,
} from "react-icons/md";

const SideBarLink = ({
  link,
  activeLink,
  setActiveLink,
  collapsed,
}: ISideBarLinkProps) => {
  const setIcon = (name: string): JSX.Element => {
    switch (name) {
      case "home":
        return <MdHome />;
      case "articles":
        return <MdArticle />;
      case "people":
        return <MdPeople />;
      case "calendar":
        return <MdCalendarToday />;
      default:
        return <MdSportsRugby />;
    }
  };
  return (
    <Link href={`/${link.url}`} passHref>
      <div
        className={`flex justify-between items-center w-5/6 h-10 p-2 rounded cursor-pointer shadow-md hover:bg-blackX hover:text-whiteX`}
        onClick={() => setActiveLink(link)}
      >
        <div>{setIcon(link.icon)}</div>
        <h4
          className={`${collapsed ? "hidden" : "initial"} ${
            activeLink === link.label ? "bg-blackX" : ""
          }  capitalize text-sm`}
        >
          {link.label}
        </h4>
      </div>
    </Link>
  );
};

export default SideBarLink;
