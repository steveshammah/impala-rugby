import SideMenu from "./SubMenu";

const SideBar = ({ active, setActive }) => {
  return (
    <div className='side-bar-links'>
      <SideMenu category={"dashboard"} />
      <SideMenu category={"teams"} />
      <SideMenu category={"sales"} />
      <SideMenu category={"website"} />
    </div>
  );
};

export default SideBar;
