import React, { Dispatch, SetStateAction } from "react";
interface ISideBarLinkProps {
  name: string;
  icon: string;
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const SideBarLink = ({
  name,
  icon,
  activeLink,
  setActiveLink,
}: ISideBarLinkProps) => {
  // const setIcon = (name: string) => {
  //   switch (name) {
  //     case "home":
  //       return <Home />;
  //     case "training":
  //       return <CalendarToday />;
  //     case "payments":
  //       return <AttachMoney />;
  //     case "sales":
  //       return <TrendingUp />;
  //     case "tickets":
  //       return <Payment />;
  //     case "gazelles":
  //       return <SportsRugbyTwoTone />;
  //     case "boks":
  //       return <SportsRugbyTwoTone />;
  //     case "ladies":
  //       return <SportsRugby />;
  //     case "swaras":
  //       return <SportsRugbyTwoTone />;
  //     case "age-grade":
  //       return <SportsRugby />;
  //     case "videos":
  //       return <Videocam />;
  //     case "podcasts":
  //       return <Mic />;
  //     case "socials":
  //       return <PeopleAlt />;
  //     case "default":
  //       return <PeopleAlt />;
  //     default:
  //       return <SportsRugby />;
  //   }
  // };
  return (
    <>
      {/* <ListItemIcon>{setIcon(icon)}</ListItemIcon>

      <ListItemText
        className={activeLink === name ? "link-text active" : "link-text"}
        onClick={() => setActiveLink(name)}
        primary={name}
      /> */}
    </>
  );
};

export default SideBarLink;
