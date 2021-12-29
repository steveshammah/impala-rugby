import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { team } from "../../resources/resources";
import "./squad.scss";

const Squads = () => {
  const [activeLink, setActiveLink] = useState("All");
  const [activeTeam, setActiveTeam] = useState(team);

  useEffect(() => {
    const selectedTeam = team.filter((member) => member.team === activeLink);
    setActiveTeam(activeLink === "All" ? team : selectedTeam);
  }, [activeLink]);

  const handleClick = (link) => {
    setActiveLink(link);
  };
  const links = ["All", "Men", "Women", "Swaras", "Coaches"];
  return (
    <div className='squad-container'>
      <h2>Impala Squad</h2>
      {/* 
      <div className='join-banner'>
        <h2>One Team One Dream</h2>
        <div className='banner-text'>
          <h3>Join our free membership today</h3>
          <Button variant='contained'>Join the family</Button>
        </div>
      </div> */}

      <div className='squad-nav'>
        <ul>
          {links.map((link) => (
            <li
              className={activeLink === link && "active"}
              onClick={() => handleClick(link)}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='squad-members'>
        {activeTeam.map((member) => (
          <a
            href={`/players-and-staff/${member.id}`}
            className='member'
            key={member.id}>
            <img src={member.img} alt='' />
            <span>
              <h3>{member.name}</h3>
              <h5>{member.team}</h5>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Squads;
