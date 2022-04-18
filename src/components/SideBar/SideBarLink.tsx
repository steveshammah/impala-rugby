import {
  Home,
  AttachMoney,
  TrendingUp,
  Payment,
  SportsRugbyTwoTone,
  SportsRugby,
  Videocam,
  Mic,
  PeopleAlt,
  CalendarToday,
} from "@material-ui/icons";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const SideBarLink = ({ name, icon, active, setActiveLink }) => {
  const setIcon = (name) => {
    switch (name) {
      case "home":
        return <Home />;
      case "training":
        return <CalendarToday />;
      case "payments":
        return <AttachMoney />;
      case "sales":
        return <TrendingUp />;
      case "tickets":
        return <Payment />;
      case "gazelles":
        return <SportsRugbyTwoTone />;
      case "boks":
        return <SportsRugbyTwoTone />;
      case "ladies":
        return <SportsRugby />;
      case "swaras":
        return <SportsRugbyTwoTone />;
      case "age-grade":
        return <SportsRugby />;
      case "videos":
        return <Videocam />;
      case "podcasts":
        return <Mic />;
      case "socials":
        return <PeopleAlt />;
      case "default":
        return <PeopleAlt />;
      default:
        return <SportsRugby />;
    }
  };
  return (
    <>
      <ListItemIcon>{setIcon(icon)}</ListItemIcon>

      <ListItemText
        className={active === name ? "link-text active" : "link-text"}
        onClick={() => setActiveLink(name)}
        primary={name}
      />
    </>
  );
};

export default SideBarLink;

{
  /*
   */
}
