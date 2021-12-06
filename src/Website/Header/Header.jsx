import { Box } from "@mui/material";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import "./header.scss";

const Header = () => {
  return (
    <Box maxWidth='bg' className='website-nav'>
      <TopNav />
      <BottomNav />
    </Box>
  );
};

export default Header;
