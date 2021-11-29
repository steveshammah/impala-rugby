import "./profile.scss";
import { useContext } from "react";
import { logos, coverPhotos } from "../../../resources/resources";
import { teamContext } from "../../../contexts/team-context";
import {
  Assignment,
  ChatBubble,
  AccountBox,
  SettingsApplications,
} from "@material-ui/icons";

const MemberProfile = ({ match }) => {
  const { team } = useContext(teamContext);
  const member = team.filter(
    (user) => user.id === parseInt(match.params.id)
  )[0];
  // console.log(member[0]);

  return (
    <section className='member-profile container'>
      <div className='profile-image'>
        <img src={coverPhotos.image1} alt='' />
      </div>
      <div className='container-wrapper'>
        <div className='left-container'>
          <div className='member-profile-card'>
            <div className='profile-pic'>
              <span></span>
              <img src={logos.impala_logo} alt='Profile' />

              <span></span>
            </div>

            <div className='profile-meta'>
              <h3>{member.name}</h3>
              <h5>Team: {member.team}</h5>
              <h5>Phone: {member.phone}</h5>
              <h5>Email: {member.email}</h5>
            </div>
            <button>
              <ChatBubble className='icon' /> Message
            </button>
            {/* <div className='member-dates'>
              <h5>Date of Birth: {member.dob} </h5>
              <h5>Date Joined: {member.year}</h5>
            </div> */}
          </div>
          <span className='profile-scripture'>
            <strong>Phillipians 4:13</strong>
            <p>I can do all things through Christ who strengthens me.</p>
          </span>
        </div>
        <div className='right-container'>
          <ul className='profile-nav-links'>
            <li className='active'>
              <AccountBox /> About
            </li>
            <li>
              <Assignment /> Statistics
            </li>
            <li>
              <SettingsApplications /> Settings
            </li>
          </ul>
          <div className='member-stats'>
            <h2>Statistics</h2>
            <div className='stats-wrapper'>
              <div className='training-stats'>
                <h3>Training Statistics</h3>
                <div>
                  <span>
                    <strong>Days Trained:</strong> {member.daysTrained}
                  </span>{" "}
                  <br />
                  <span>
                    <strong>Days Missed:</strong> {member.daysMissed}
                  </span>
                </div>
              </div>
              <div className='match-stats'>
                <h3>Match Statistics</h3>
              </div>
              <div className='appearance-stats'>
                <h3>Appearances</h3>
                {member.appearances}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
