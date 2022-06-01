import { Box, Button } from "@mui/material";

const TopNav = () => {
  return (
    <Box className="top-header">
      <ul className="header-leagues">
        <li>Kenya Cup</li>
        <li>ESS</li>
        <li>Nationwide</li>
      </ul>

      <ul className="mini-list">
        <li>
          <a href="/store">Store |</a>
        </li>
        <li>
          <a href="/tickets">Tickets |</a>
        </li>

        <li>
          <a href="/my-story">Stories |</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/impala-tv">
            <Button variant="contained" className="btn">
              Impala TV
            </Button>
          </a>
        </li>
        <li>
          <a href="/login">
            <Button variant="outlined"> Sign In</Button>
          </a>
        </li>
        <li>
          <a href="/membership">
            <Button variant="outlined">Subscribe</Button>
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default TopNav;
