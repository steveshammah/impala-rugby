import { GroupCard } from "./GroupCard";
import "./Groups.scss";

export const GroupContainer = () => {
  return (
    <div className='groups-section'>
      <div className='nav-panel'>
        <span>Message</span>
        <span>Users</span>
        <span>Impala Time</span>
        <span>Settings</span>
      </div>

      <div className='group-list'>
        <div className='list-nav'>
          <span>Back | Groups</span>
          <span>Sort | Sort</span>
        </div>

        <div className='groups-container'>
          <GroupCard />
        </div>
      </div>
    </div>
  );
};
