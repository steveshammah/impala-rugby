import "./profile.scss";
import { useContext, useState } from "react";

import { teamContext } from "../../../contexts/team-context";
import MemberAbout from "./MemberAbout";
import MemberSettings from "./MemberSettings";
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

const MemberProfile = ({ match }) => {
  const { team } = useContext(teamContext);
  const [value, setValue] = useState(0);
  const [activeWindow, setActiveWindow] = useState("about");
  const member = team.filter(
    (user) => user.id === parseInt(match.params.id)
  )[0];

  return (
    <section className='member-profile container'>
      {/* Member Cover Photo */}
      <div className='profile-image'>
        <img src={member.img} alt='' />
      </div>
      <div className='container-wrapper'>
        <div className='left-container'>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component='img'
              height='200'
              image={member.img}
              alt='User profile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {member.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                One Team. One Dream
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Message</Button>
              <Button size='small'>More</Button>
            </CardActions>
          </Card>

          <div className='profile-meta'>
            <div>
              <h5>Team: {member.team}</h5>
              <h5>Phone: {member.phone}</h5>
              <h5>Email: {member.email}</h5>
            </div>
            <span className='profile-scripture'>
              <strong>Phillipians 4:13</strong>
              <p>I can do all things through Christ who strengthens me.</p>
            </span>
          </div>
        </div>
        <div className='right-container'>
          <div className='profile-nav-links'>
            <Box sx={{ width: 500 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}>
                <BottomNavigationAction
                  label='About'
                  onClick={() => setActiveWindow("about")}
                />
                <BottomNavigationAction
                  onClick={() => setActiveWindow("statistics")}
                  label='Statistics'
                />
                <BottomNavigationAction
                  onClick={() => setActiveWindow("settings")}
                  label='Settings'
                />
              </BottomNavigation>
            </Box>
          </div>

          <Container maxWidth='lg'>
            <MemberAbout member={member} activeWindow={activeWindow} />
            <MemberSettings member={member} activeWindow={activeWindow} />
            <MemberStatistics member={member} activeWindow={activeWindow} />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
