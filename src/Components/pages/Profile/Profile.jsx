import "./profile.scss";
import Management from "../../Teams/Management/Management";
import Training from "../../Teams/Management/Training/Training";
import Allowance from "../../Teams/Management/Allowance/Allowance";
import Gazelles from "../../Teams/Gazelles/Gazelles";
import Boks from "../../Teams/Boks/Boks";
import Ladies from "../../Teams/Ladies/Ladies";
import Swaras from "../../Teams/Swaras/Swaras";
import Fixtures from "../../Teams/Management/Fixtures/Fixtures";
import AddMember from "../../Teams/Management/AddMember/AddMember";
import { appContext } from "../../../contexts/app-context";
import TeamState from "../../../contexts/team-context";
import { useContext, useState } from "react";
import { logos } from "../../../resources/resources";

const Profile = () => {
  const { username } = useContext(appContext);
  const [activeLink, setActiveLink] = useState("training");

  return (
    <>
      <section className='profile-card'>
        <div className='profile-pic'>
          <span></span>
          <img src={logos.impala_logo} alt='Profile' />

          <span></span>
        </div>

        <div className='profile-meta'>
          <h4>{username}</h4>
          <strong>Phil 4:13</strong>
          <p>I can do all things through Christ who strengthens me.</p>
        </div>
      </section>
      <TeamState>
        <Management active={activeLink} />
        <Training active={activeLink} />
        <Allowance active={activeLink} />
        <Gazelles active={activeLink} />
        <Boks active={activeLink} />
        <Ladies active={activeLink} />
        <Swaras active={activeLink} />
        <Fixtures active={activeLink} />
        <AddMember active={activeLink} />
      </TeamState>
    </>
  );
};

export default Profile;
