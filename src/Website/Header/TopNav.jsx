import { Box, Button } from "@mui/material";
import React from "react";

const TopNav = () => {
  return (
    <Box className='top-header'>
      <ul className='header-leagues'>
        <li>Kenya Cup</li>
        <li>ESS</li>
        <li>Nationwide</li>
      </ul>

      <ul className='mini-list'>
        <li>Shop | </li>
        <li>Tickets | </li>
        <li>Stories</li>
      </ul>

      <ul>
        <li>
          <Button variant='contained' className='btn'>
            Impala TV
          </Button>
        </li>
        <li>
          <Button variant='outlined'> Sign In</Button>
        </li>
        <li>
          <Button variant='outlined'>Subscribe</Button>
        </li>
      </ul>
    </Box>
  );
};

export default TopNav;
