import { useState } from "react";
import Fixtures from "./Fixtures";
import "./matchcenter.scss";
import Results from "./Results";
import Standings from "./Standings";

const MatchCenter = () => {
  const [activeContainer, setActiveContainer] = useState("Fixtures");
  const navList = ["Fixtures", "Results", "Standings"];

  const handleClick = (name) => {
    setActiveContainer(name);
  };
  return (
    <div className='match-center'>
      <div className='match-center-nav'>
        <select name='team' id=''>
          <option value='MEN'>Men</option>
          <option value='WOMEN'>Women</option>
          <option value='SWARAS'>Swaras</option>
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

      {activeContainer === "Fixtures" && <Fixtures />}
      {activeContainer === "Results" && <Results />}
      {activeContainer === "Standings" && <Standings />}
    </div>
  );
};

export default MatchCenter;
