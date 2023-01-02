import React from "react";
import Link from "next/link";
import { logos } from "@public/resources/resources";
import { formatDate } from "@utils/utils";

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
              <div className="bg-whiteX text-blackX w-full p-1 sm:text-md text-sm capitalize">
                {fixture?.kickOff &&
                  formatDate(fixture?.kickOff.seconds * 1000, "long")}{" "}
                | {fixture?.competition}
              </div>
              {fixture.home ? (
                <div className="flex items-center justify-center w-full  ">
                  <div className="flex items-center justify-end flex-1">
                    <h4 className="italic mr-1 sm:text-base text-sm">Impala</h4>
                    <img
                      src={logos.impalaLogo.src}
                      alt="Impala Logo"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />
                  </div>
                  <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                    {fixture.played
                      ? `${fixture?.impalaScores?.ft} - ${fixture?.opponentScores?.ft}`
                      : fixture?.kickOff &&
                        formatDate(fixture.kickOff.seconds * 1000, "time")}
                  </span>

                  <div className="flex items-center justify-start flex-1">
                    <img
                      src={fixture?.logo ? fixture.logo.src : logos.kruLogo.src}
                      alt="Opponent"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />

                    <h4 className="italic ml-1 min-w-max sm:text-base text-sm capitalize">
                      {fixture?.opponent}
                    </h4>
                  </div>
                </div>
              ) : (
                // Away Fixtures
                <div className="teams flex items-center justify-center ">
                  <div className="team-details flex items-center justify-end flex-1">
                    <h4 className="italic ml-1 min-w-max sm:text-base text-sm capitalize">
                      {fixture?.opponent}
                    </h4>

                    <img
                      src={fixture?.logo ? fixture.logo.src : logos.kruLogo.src}
                      alt="Opponent"
                      className="h-11 w-11 rounded-full object-contain m-2"
                    />
                  </div>
                  <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                    {fixture.played
                      ? `                        ${fixture?.opponentScores?.ft}-${fixture?.impalaScores?.ft}`
                      : fixture?.kickOff &&
                        formatDate(fixture.kickOff.seconds * 1000, "time")}
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
                href={`/fixtures/${fixture.uId}`}
                className="text-primaryRed font-semibold text-sm"
              >
                {fixture.played ? "Match Review" : "Match Details"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
