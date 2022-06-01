import { Box } from "@mui/material";
import { useState } from "react";
import BottomNav from "./BottomNav";
// import TopNav from "./TopNav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Box maxWidth='bg' className='website-nav'>
        {/* <TopNav /> */}
        <BottomNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Box>
    </header>
  );
};

export default Header;
