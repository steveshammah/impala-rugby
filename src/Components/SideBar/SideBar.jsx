import SideMenu from "./SubMenu";

const SideBar = () => {
  const categories = ["dashboard", "league", "teams", "website"];
  return (
    <div className='side-bar-links'>
      {categories.map((category) => (
        <SideMenu category={category} />
      ))}
    </div>
  );
};

export default SideBar;
