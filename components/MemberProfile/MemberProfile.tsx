import React, { useState } from "react";
import { team } from "../../public/resources/resources";

// import { teamContext } from "../../../contexts/team-context";
// import MemberAbout from "../../../pages/squads/member/MemberAbout";
import MemberGallery from "./MemberGallery";
// import MemberStatistics from "../../../pages/squads/member/MemberStatistics";

const MemberProfile = ({ match }) => {
  // const { team } = useContext(teamContext);
  const [value, setValue] = useState(0);
  const [activeWindow, setActiveWindow] = useState("about");

  const member = team.filter(
    (user) => user.id === parseInt(match.params.id)
  )[0];

  return (
    <section className="member-profile">
      {/* Member Cover Photo */}
      <div className="profile-image">
        <img src={member.img} alt="" />
      </div>
      <div className="container-wrapper">
        <div className="left-container">
          <div className="member-profile-card">
            <img height="200" src={member.img.src} alt="User profile" />
            <div>
              <h2>{member.name}</h2>
              <h2>One Team. One Dream</h2>
            </div>
            <div>
              <button>Message</button>
              <button>More</button>
            </div>
          </div>

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
            <div>
              <div
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              >
                <div onClick={() => setActiveWindow("about")} />
                About
                <div onClick={() => setActiveWindow("statistics")} />
                Statistics
                <div onClick={() => setActiveWindow("gallery")} />
                Gallery
              </div>
            </div>
          </div>

          <div>
            {/* <MemberAbout member={member} activeWindow={activeWindow} /> */}
            <MemberGallery member={member} activeWindow={activeWindow} />
            {/* <MemberStatistics member={member} activeWindow={activeWindow} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
