import React from "react";
import { logos } from "../../public/resources/resources";
import Link from "next/link";
import { useFixtureStore } from "../../stores/gamesStore";
import { formatDate } from "../../utils";

export interface Props {
  position: number;
}

const MatchesContainer = ({ position }: Props) => {
  const fixtures = useFixtureStore((state) => state.fixtures);
  return (
    <div
      className="flex justify-evenly  items-center transition-all ease-in-out duration-700 overflow-y-hidden"
      // style={{ transform: `translateX(${position}%)` }}
    >
      {fixtures.map((match, index) => {
        return (
          <div
            key={index}
            className=" w-80 h-80 flex flex-col shadow-md hover:shadow-xl m-4 rounded-md p-2"
          >
            <div className="flex-1 flex flex-col items-center w-full">
              <h4 className="uppercase">{match.competition}</h4>
              {formatDate(match?.kickOff.seconds * 1000, "long")}
              {/* <div className="flex">   */}
              <span className="capitalize">
                {formatDate(match?.kickOff.seconds * 1000, "time")}{" "}
              </span>

              <span className="capitalize italic">{match.venue}</span>
              {/* </div> */}
            </div>
            {!match?.home ? (
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={match?.logo ? match.logo.src : logos.kruLogo.src}
                    alt="Logo"
                    className="h-14 w-16 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-sm capitalize">
                    {match.opponent}
                  </h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                    {match.impalaScores.ft}-{match.opponentScores.ft}
                  </span>
                ) : (
                  <span className="bg-blackX p-2  rounded-md text-whiteX">
                    {formatDate(match?.kickOff.seconds * 1000, "time")}
                  </span>
                )}
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Impala Logo"
                    className="h-14 w-16 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-sm">Impala</h3>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-between w-full">
                <div className="flex flex-1 flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Impala Logo"
                    className="h-14 w-16 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-sm w-18">Impala</h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                    {match.impalaScores.ft}-{match.opponentScores.ft}
                  </span>
                ) : (
                  <span className="bg-blackX p-2  rounded-md text-whiteX">
                    {formatDate(match?.kickOff.seconds * 1000, "time")}
                  </span>
                )}
                <div className="flex flex-1 flex-col">
                  <img
                    src={match?.logo ? match.logo.src : logos.kruLogo.src}
                    alt="Logo"
                    className="h-14 w-16 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-sm capitalize w-18 text-ellipsis">
                    {match.opponent}
                  </h3>
                </div>
              </div>
            )}
            <div className="teams flex flex-1 items-center  justify-center flex-col">
              {
                <Link href={`/fixtures/${match.uId}`}>
                  <button className="border border-gray-400 font-thin p-2 rounded-full">
                    {match?.played ? "Match Report" : "  Match Review"}
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
