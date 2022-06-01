import { useState } from "react";
import { team } from "../../../public/resources/resources";

// import { teamContext } from "../../../contexts/team-context";
import MemberAbout from "./MemberAbout";
import MemberGallery from "./MemberGallery";
import MemberStatistics from "./MemberStatistics";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";

const MemberProfile = () => {
  // const { team } = useContext(teamContext);
  const [value, setValue] = useState(0);
  const [activeWindow, setActiveWindow] = useState("about");
  const router = useRouter();
  const memberId = router && parseInt(router.query.id);

  const member = team.filter(
    (user) => user.id === memberId
  )[0];

  return (
    <section className="member-profile">
      {/* Member Cover Photo */}
      <div className="profile-image">
        <img src={member.img} alt="" />
      </div>
      <div className="container-wrapper">
        <div className="left-container">
          <Card className="member-profile-card">
            <CardMedia
              component="img"
              height="200"
              image={member.img}
              alt="User profile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                One Team. One Dream
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Message</Button>
              <Button size="small">More</Button>
            </CardActions>
          </Card>

          <div className="profile-meta">
            <div>
              <h5>Team: {member.team}</h5>
              <h5>Phone: {member.phone}</h5>
              <h5>Email: {member.email}</h5>
            </div>
            <span className="profile-scripture">
              <strong>Phillipians 4:13</strong>
              <p>I can do all things through Christ who strengthens me.</p>
            </span>
          </div>
        </div>
        <div className="right-container">
          <div className="profile-nav-links">
            <Box sx={{ width: 500 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="About"
                  onClick={() => setActiveWindow("about")}
                />
                <BottomNavigationAction
                  onClick={() => setActiveWindow("statistics")}
                  label="Statistics"
                />
                <BottomNavigationAction
                  onClick={() => setActiveWindow("gallery")}
                  label="Gallery"
                />
              </BottomNavigation>
            </Box>
          </div>

          <Container maxWidth="lg">
            <MemberAbout member={member} activeWindow={activeWindow} />
            <MemberGallery member={member} activeWindow={activeWindow} />
            <MemberStatistics member={member} activeWindow={activeWindow} />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
