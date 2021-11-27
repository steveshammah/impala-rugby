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
import "../pages/Home/home.scss";
import { Link } from "react-router-dom";

const SideBarLink = ({ name, icon, url, active, setActiveLink }) => {
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
    <Link to={`/${url}`} className='link'>
      <li
        className={active === name ? "active" : ""}
        onClick={() => setActiveLink(name)}>
        {setIcon(icon)}
        {name}
      </li>
    </Link>
  );
};

export default SideBarLink;
