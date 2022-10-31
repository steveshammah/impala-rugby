import React, { useState, useRef, useEffect, useMemo } from "react";
import Fixtures from "../../components/MatchCenter/Fixtures";
import Standings from "../../components/MatchCenter/Standings";
import { allFixtures } from "../../public/resources/resources";

import Link from "next/link";

const teams = ["Men", "Women", "Swaras"];
const navList = ["Fixtures", "Results", "Standings"];

const MatchCenter = () => {
  const [activeContainer, setActiveContainer] = useState("Fixtures");
  const [teamFixtures, setTeamFixtures] = useState<any[]>([{}]);

  const [activeTeam, setActiveTeam] = useState<any>("Men");
  const teamSelect = useRef<HTMLSelectElement | null>(null);

  const toBePlayed = useMemo(
    () => teamFixtures.filter((fixture) => !fixture.played),
    [teamFixtures]
  );
  const played = useMemo(
    () => teamFixtures.filter((fixture) => fixture.played),
    [teamFixtures]
  );
  useEffect(() => {
    const team = allFixtures[`${activeTeam}`];
    setTeamFixtures(team);
  }, [activeTeam]);

  const handleClick = (name: string) => {
    setActiveContainer(name);
  };

  const handleChange = (e: any) => {
    const team = teamSelect?.current?.value;
    setActiveTeam(team);
  };
  return (
    <div className="w-full">
      <div className="h-16 flex items-end justify-center bg-blackX mb-8">
        <select
          name="team"
          id=""
          ref={teamSelect}
          onClick={handleChange}
          className="text-lg sm:h-2/3 h-1/2 sm:w-32 w-24 rounded-t-md mr-20 outline-none  text-blackX"
        >
          {teams.map((team) => (
            <option value={team}>{team}</option>
          ))}
        </select>
        <ul className="flex">
          {navList.map((link) => (
            <li
              onClick={() => handleClick(link)}
              className={`cursor-pointer sm:mr-2 mr-1 rounded-t-md sm:p-2 p-1  ${
                activeContainer === link
                  ? "text-whiteX bg-primaryRed"
                  : "bg-whiteX text-blackX"
              } `}
            >
              <Link href={`?${link}`}>
                <a>{link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeContainer === "Fixtures" && (
        <Fixtures activeTeam={activeTeam} games={toBePlayed} />
      )}
      {activeContainer === "Results" && (
        <Fixtures activeTeam={activeTeam} games={played} />
      )}
      {activeContainer === "Standings" && <Standings />}
    </div>
  );
};

export default MatchCenter;
