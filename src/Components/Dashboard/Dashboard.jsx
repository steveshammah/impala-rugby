import SideBar from "./SideBar/SideBar";
import Summary from "./Summary/Summary";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <Summary />
    </div>
  );
};

export default Dashboard;
