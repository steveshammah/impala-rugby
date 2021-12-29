import { useState, useRef, useEffect } from "react";
import Fixtures from "./Fixtures";
import "./matchcenter.scss";
import Results from "./Results";
import Standings from "./Standings";

const MatchCenter = () => {
  const [activeContainer, setActiveContainer] = useState("Fixtures");
  const [activeTeam, setActiveTeam] = useState("Men");
  const teams = ["Men", "Women", "Swaras"];
  console.log("Active Team", activeTeam);
  const navList = ["Fixtures", "Results", "Standings"];
  const teamSelect = useRef();
  useEffect(() => {
    console.log("Rerender");
  }, [activeTeam]);

  const handleClick = (name) => {
    setActiveContainer(name);
    // console.log(teamSelect.current.value);
  };

  const handleChange = (e) => {
    const team = e.target.value;
    console.log("Team on change", teamSelect.current.value);
    setActiveTeam(teamSelect.current.value);
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
