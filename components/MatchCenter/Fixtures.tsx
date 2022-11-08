import React from "react";
import Link from "next/link";
import { logos } from "../../public/resources/resources";

interface Props {
  activeTeam: string;
  games: any[];
}
const Fixtures = ({ activeTeam, games }: Props) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center sm:w-2/3 w-full">
        <div className="flex justify-center items-center flex-col sm:w-4/5 w-11/12">
          {games.map((fixture, index) => (
            <div
              key={index}
              className="w-full bg-white flex flex-col items-center justify-center"
            >
              <div className="bg-whiteX text-blackX w-full p-1 sm:text-md text-sm">
                {fixture.day} | {fixture.league}
              </div>
              {fixture.home ? (
                <div className="flex items-center justify-center ">
                  <div className="flex items-center justify-end flex-1">
                    <h4 className="italic mr-1 sm:text-base text-sm">Impala</h4>
                    <img
                      src={logos.impalaLogo.src}
                      alt="Impala Logo"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />
                  </div>
                  <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                    {fixture.kickOff}
                  </span>

                  <div className="flex items-center justify-end flex-1">
                    <img
                      src={fixture.logo.src}
                      alt="Opponent Logo"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />

                    <h4 className="italic ml-1 min-w-max sm:text-base text-sm">
                      {fixture.opponent}
                    </h4>
                  </div>
                </div>
              ) : (
                // Away Fixtures
                <div className="teams flex items-center justify-center ">
                  <div className="team-details flex items-center justify-end flex-1">
                    <h4 className="italic ml-1 min-w-max sm:text-base text-sm">
                      {fixture.opponent}
                    </h4>

                    <img
                      src={fixture.logo?.src}
                      alt="Opponent Logo"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />
                  </div>
                  <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                    {fixture.played ? fixture.scores : fixture.kickOff}
                  </span>
                  <div className="team-details flex items-center justify-end flex-1">
                    <img
                      src={logos.impalaLogo?.src}
                      alt="Impala Logo"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />

                    <h4 className="italic mr-1 sm:text-base text-sm">Impala</h4>
                  </div>
                </div>
              )}
              <Link
                href={`/fixtures/${fixture.id}?team=${activeTeam}`}
                className="text-primaryRed text-sm"
              >
                <a className="text-primaryRed font-semibold text-sm">
                  {fixture.played ? "Match Review" : "Match Details"}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
