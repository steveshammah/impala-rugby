import "./Profile.scss";
import { ProfileLinks } from "./ProfileLinks";
import { Training } from "../Training/Training";
import { LoginContext } from "../../Contexts/LoginContext";
import { useContext } from "react";
import impala from "../../Resources/impala-logo.png";

export const Profile = () => {
  const { username } = useContext(LoginContext);

  return (
    <>
      <section className='profile-card'>
        <div className='profile-pic'>
          <span></span>
          <img src={impala} alt='' />

          <span></span>
        </div>

        <div className='profile-meta'>
          <h3>{username}</h3>
          <strong>Phil 4:13</strong>
          <p>I can do all things through Christ who strengthens me.</p>
        </div>
      </section>

      <ProfileLinks />

      <Training />
    </>
  );
};
