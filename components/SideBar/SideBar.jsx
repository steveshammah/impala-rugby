import SubMenu from "./SubMenu";

const SideBar = () => {
  const categories = ["dashboard", "league", "teams", "website"];

  return (
    <div
      sx={{ margin: 2 }}
      variant="permanent"
      anchor="left"
      className="side-bar-links"
    >
      {/* <Toolbar />
      <Toolbar /> */}

      {categories.map((category) => (
        <SubMenu category={category} />
      ))}
    </div>
  );
};

export default SideBar;
