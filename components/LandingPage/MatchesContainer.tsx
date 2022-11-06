import React from "react";
import { allFixtures, logos } from "../../public/resources/resources";
import Link from "next/link";

export interface Props {
  position: number;
}

const MatchesContainer = ({ position }: Props) => {
  const { Men } = allFixtures;
  return (
    <div
      className="matches container-md-wrapper flex justify-evenly  items-center transition-all ease-in-out duration-700 overflow-y-hidden"
      style={{ transform: `translateX(${position}%)` }}
    >
      {Men.map((match, index) => {
        return (
          <div
            key={index}
            className="match container-card w-64 h-80 flex flex-col shadow-md hover:shadow-xl m-4 rounded-md p-2"
          >
            <div className="date-details flex-1 flex flex-col items-center w-full">
              <h3 className="uppercase">{match.league}</h3>
              {match.day} <br />
              {match.kickOff}, {match.venue}
            </div>
            {match.venue !== "Impala Grounds" ? (
              <div className="team-logos flex items-center justify-between">
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={match.logo.src}
                    alt="Away Team Logo"
                    className="h-14 object-contain rounded-full object-center"
                  />
                  <h3 className="font-semibold text-lg">{match.opponent}</h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 rounded-md text-whiteX">
                    {match.scores}
                  </span>
                ) : (
                  <span className="bg-blackX p-2 rounded-md text-whiteX">
                    {match.kickOff}
                  </span>
                )}
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Home Team Logo"
                    className="h-14 object-contain rounded-full object-center"
                  />
                  <h3 className="font-semibold text-lg">Impala</h3>
                </div>
              </div>
            ) : (
              <div className="team-logos flex flex-1 items-center justify-between">
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Home Team Logo"
                    className="h-14 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-lg">Impala</h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 rounded-md text-whiteX">
                    {match.scores}
                  </span>
                ) : (
                  <span className="bg-blackX p-2 rounded-md text-whiteX">
                    {match.kickOff}
                  </span>
                )}
                <div className="flex flex-col">
                  <img
                    src={match.logo.src}
                    alt="Away Team Logo"
                    className="h-14 object-contain rounded-full object-center"
                  />
                  <h3 className="font-semibold text-lg">{match.opponent}</h3>
                </div>
              </div>
            )}
            <div className="teams flex flex-1 items-center  justify-center flex-col">
              {
                <Link href={`/fixtures/${match.id}?team=Men`}>
                  <button className="border border-gray-400 font-thin p-2 rounded-full">
                    Match Review
                  </button>
                </Link>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchesContainer;
