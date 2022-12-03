import React, { useState, useRef, useMemo } from "react";
import Fixtures from "@components/MatchCenter/Fixtures";
import Standings from "@components/MatchCenter/Standings";

import Link from "next/link";
import { useFixtureStore } from "@stores/gamesStore";

// Implement team filtering
// const teams = ["All", "Men", "Women", "Swaras"];
const teams = ["All"];
const navList = ["Fixtures", "Results", "Standings"];

const MatchCenter = () => {
  const [activeContainer, setActiveContainer] = useState("Fixtures");
  const [activeTeam, setActiveTeam] = useState<string>("Men");
  const teamSelect = useRef<HTMLSelectElement | null>(null);

  const fixtures = useFixtureStore((state) => state.fixtures);
  const toBePlayed = useMemo(
    () => fixtures.filter((fixture) => !fixture.played),
    [fixtures]
  );
  const played = useMemo(
    () => fixtures.filter((fixture) => fixture.played).reverse(),
    [fixtures]
  );

  const handleClick = (name: string) => {
    setActiveContainer(name);
  };

  return (
    <div className="w-full">
      <div className="h-16 flex items-end justify-center bg-blackX mb-8">
        <select
          name="team"
          id=""
          ref={teamSelect}
          // onChange={handleChange}
          className="text-lg sm:h-2/3 h-1/2 sm:w-32 w-20 rounded-t-md sm:mr-20 mr-6 outline-none  text-blackX"
        >
          {teams.map((team, index) => (
            <option value={team} key={index}>
              {team}
            </option>
          ))}
        </select>
        <ul className="flex">
          {navList.map((link, index) => (
            <li
              key={index}
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
