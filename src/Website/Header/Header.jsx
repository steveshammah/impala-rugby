import { Box } from "@mui/material";
import BottomNav from "./BottomNav";
// import TopNav from "./TopNav";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Box maxWidth='bg' className='website-nav'>
        {/* <TopNav /> */}
        <BottomNav />
      </Box>
    </header>
  );
};

export default Header;
