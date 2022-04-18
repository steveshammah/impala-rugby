import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import SubMenu from "./SubMenu";

const SideBar = () => {
  const categories = ["dashboard", "league", "teams", "website"];

  return (
    <Drawer
      sx={{ margin: 2 }}
      variant='permanent'
      anchor='left'
      className='side-bar-links'>
      <Toolbar />
      <Toolbar />

      {categories.map((category) => (
        <SubMenu category={category} />
      ))}
    </Drawer>
  );
};

export default SideBar;
