import "./Profile.scss";
import { ProfileLinks } from "./ProfileLinks";
import { Management } from "../Management/Management";
import { Training } from "../Training/Training";
import { Allowance } from "../Allowance/Allowance";
import { Gazelles } from "../Gazelles/Gazelles";
import { Boks } from "../Boks/Boks";
import { Ladies } from "../Ladies/Ladies";
import { Swaras } from "../Swaras/Swaras";
import { Fixtures } from "../Fixtures/Fixtures";
import { LoginContext } from "../../Contexts/LoginContext";
import { useContext, useState } from "react";
import impala from "../../Resources/impala-logo.png";

export const Profile = () => {
  const { username } = useContext(LoginContext);
  const [activeLink, setActiveLink] = useState("");

  const players = [
    {
      id: 0,
      name: "Steve Shammah",
      daysTrained: 6,
      daysMissed: 4,
      appearances: 60,
      dob: "26/2/1996",
      year: 1996,
      team: "swaras",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 1,
      name: "Tyson Okoth",
      daysTrained: 9,
      daysMissed: 1,
      appearances: 60,
      dob: "26/2/1996",
      year: 1996,
      team: "gazelles",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 2,
      name: "Nato Simiyu ",
      daysTrained: 8,
      daysMissed: 2,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "gazelles",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 3,
      name: "Dancun Ekasi ",
      daysTrained: 7,
      daysMissed: 3,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "swaras",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 4,
      name: "Sammy Oliech",
      daysTrained: 3,
      daysMissed: 7,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 5,
      name: "Paul Mutsami",
      daysTrained: 5,
      daysMissed: 5,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 6,
      name: "Patrick Mutuku",
      daysTrained: 2,
      daysMissed: 8,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 7,
      name: "Richard Asante ",
      daysTrained: 4,
      daysMissed: 6,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 8,
      name: "Valentino Cosmas ",
      daysTrained: 2,
      daysMissed: 8,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 9,
      name: "Clinton Musonye",
      daysTrained: 10,
      daysMissed: 0,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "swaras",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 10,
      name: "Martin Juma",
      daysTrained: 9,
      daysMissed: 1,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "ladies",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 11,
      name: "George Okowa",
      daysTrained: 4,
      daysMissed: 6,
      appearances: 400,
      dob: "1/1/1988",
      year: 1988,
      team: "boks",
      socials: [{ instagram: "steveshammah_", twitter: "steveshammah_" }],
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    // {
    //   id: 12,
    //   name: "Quinto Oongo",
    //   consistency: "exceptional",
    //   appearances: 160,
    //   dob: 1993,
    // },
    // {
    //   id: 13,
    //   name: "Anthony Nyandigisi",
    //   training_ratio: "1/4",
    //   consistency: "poor",
    //   appearances: 200,
    //   dob: 1986,
    // },
    // {
    //   id: 14,
    //   name: "Martin Musau",
    //   training_ratio: "3/4",
    //   consistency: "good",
    //   appearances: 15,
    //   dob: 1995,
    // },
  ];

  console.log(activeLink);
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

      <ProfileLinks active={activeLink} setActive={setActiveLink} />

      <Management players={players} active={activeLink} />
      <Training players={players} active={activeLink} />
      <Allowance players={players} active={activeLink} />
      <Gazelles players={players} active={activeLink} />
      <Boks players={players} active={activeLink} />
      <Ladies players={players} active={activeLink} />
      <Swaras players={players} active={activeLink} />
      <Fixtures active={activeLink} />
    </>
  );
};
