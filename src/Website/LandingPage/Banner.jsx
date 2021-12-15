import { Button } from "@mui/material";
import "./website.scss";

const style = {
  height: "30vh",
  backgroundColor: "black",
  backgroundAttachment: "fixed",
  color: "white",
  overflow: "hidden",
  cursor: "pointer",
  marginBottom: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const headerStyle = {
  height: "60px",
  padding: "30px",
  border: "1px solid white",
};

const Banner = () => {
  return (
    <div style={style}>
      <h2 style={{ headerStyle }}>#MACHOREDSINCE</h2>
      <p>
        You'll never forget the moment you realised Impala was the club for you.
      </p>
      <Button variant='contained' className='btn'>
        <a href='/membership'>VIEW MORE</a>
      </Button>
      <div className='join-herd'>
        <p>Sign Up to join the Herd for free</p>
        <Button variant='outlined'>
          <a href='/membership'>JOIN THE FAMILY</a>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
