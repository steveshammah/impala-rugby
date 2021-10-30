import { GroupCard } from "./GroupCard";
import "./Groups.scss";
import {
  Message,
  Settings,
  SupervisedUserCircleSharp,
  Timeline,
  ArrowBack,
  GridOn,
  GridOff,
} from "@material-ui/icons";

export const GroupContainer = () => {
  return (
    <div className='groups-section'>
      <div className='nav-panel'>
        <span>
          <Message className='icon' />
        </span>
        <span>
          <SupervisedUserCircleSharp className='icon' />
        </span>
        <span>
          <Timeline className='icon' />
        </span>
        <span>
          <Settings className='icon' />
        </span>
      </div>

      <div className='group-list'>
        <div className='list-nav'>
          <span>
            <ArrowBack className='icon' /> | Groups
          </span>
          <span>
            <GridOn className='icon' /> | <GridOff className='icon' />
          </span>
        </div>

        <div className='groups-container'>
          <GroupCard />
        </div>
      </div>
    </div>
  );
};
