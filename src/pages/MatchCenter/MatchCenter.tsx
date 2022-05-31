import { useState, useRef, useEffect } from "react";
import Fixtures from "./Fixtures";
import "./matchcenter.scss";
import Results from "./Results";
import Standings from "./Standings";

const teams = ["Men", "Women", "Swaras"];
const navList = ["Fixtures", "Results", "Standings"];


const MatchCenter = () => {
  const [activeContainer, setActiveContainer] = useState("Fixtures");
  const [activeTeam, setActiveTeam] = useState("Men");

  const teamSelect = useRef();
  useEffect(() => {}, [activeTeam]);

  const handleClick = (name) => {
    setActiveContainer(name);
  };

  const handleChange = (e) => {
    const team = teamSelect.current.value;
    setActiveTeam(team);
  };
  return (
    <div className='match-center'>
      <div className='match-center-nav'>
        <select name='team' id='' ref={teamSelect} onClick={handleChange}>
          {teams.map((team) => (
            <option value={team}>{team}</option>
          ))}
        </select>
        <ul>
          {navList.map((link) => (
            <li
              onClick={() => handleClick(link)}
              className={activeContainer === link && "active"}>
              {link}
            </li>
          ))}
        </ul>
      </div>

      {activeContainer === "Fixtures" && <Fixtures activeTeam={activeTeam} />}
      {activeContainer === "Results" && <Results activeTeam={activeTeam} />}
      {activeContainer === "Standings" && <Standings activeTeam={activeTeam} />}
    </div>
  );
};

export default MatchCenter;
