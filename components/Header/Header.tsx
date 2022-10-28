import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import MainNav from "./MainNav";
import SubNav from "./SubNav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Box maxWidth="bg" className="website-nav">
        <MainNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <SubNav /> */}
      </Box>
    </header>
  );
};

export default Header;
