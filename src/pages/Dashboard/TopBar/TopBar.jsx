import { NotificationImportant, Settings } from "@material-ui/icons";
import { logos } from "../../../resources/resources";

const TopBar = () => {
  return (
    <div className="topbar">
      <span>
        <NotificationImportant />
      </span>
      <span>
        <Settings />
      </span>
      <div className="imgContainer">
        <a href="/">
          <img src={logos.impalaLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
