import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";
import Summary from "./Summary/Summary";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <TopBar />
      <Summary />
    </div>
  );
};

export default Dashboard;
