import { NotificationImportant, Settings } from "@material-ui/icons";
import { logos } from "../../../../resources/resources";

const TopBar = () => {
  return (
    <div className='topbar'>
      <span>
        <NotificationImportant />
      </span>
      <span>
        <Settings />
      </span>
      <div className='imgContainer'>
        <img src={logos.impala_logo} alt='' />
      </div>
    </div>
  );
};

export default TopBar;
