import Link from "next/link";
import React from "react";
import { logos } from "../../public/resources/resources";
import { formatDate } from "../../utils";

const AllFixtures = ({ fixtures }) => {
  return (
    <div className="flex flex-col p-4">
      <h2 className="text-xl font-bold">All Fixtures</h2>

      <div className="flex">
        <i className="text-lg font-semibold mr-4">Competition</i>
        <select name="" id="" className="outline-none w-28">
          <option value="">Gazelles</option>
          <option value="">Women</option>
          <option value="">Boks</option>
          <option value="">Swaras</option>
          <option value="">Academy</option>
        </select>
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        {fixtures.map((fixture, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center w-5/6 my-4 shadow-lg rounded-md"
          >
            <div className="competion-logo flex-1 flex items-center justify-between px-4">
              <div className="flex flex-col">
                <img
                  src={logos.kruLogo.src}
                  className="h-16 w-16 object-contain"
                  alt="Competition Logo"
                />
                <i className="text-thin capitalize text-blackX">
                  {fixture?.competition}
                </i>
              </div>
              <div className="competition-dates flex flex-col justify-end text-right">
                <i className="capitalize font-bold">{fixture?.opponent}</i>
                <i className="capitalize">{fixture?.venue}</i>
                <i>{formatDate(fixture?.kickOff.seconds * 1000, "long")}</i>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="team-a flex items-center">
                <img
                  src={logos.impalaLogo.src}
                  alt=""
                  className="h-20 w-20 object-contain"
                />
              </div>
              <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                {fixture.played
                  ? `${fixture?.impalaScores?.ft} - ${fixture?.opponentScores?.ft}`
                  : fixture?.kickOff &&
                    formatDate(fixture.kickOff.seconds * 1000, "time")}
              </span>
              <div className="team-b">
                <img
                  src={logos.kruLogo.src}
                  alt=""
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
            <div className="team-a flex-1 text-right px-4">
              <Link href={`/dashboard/games/update/${fixture?.uId}`}>
                <a className="text-blackX underline mx-4">Update Fixture</a>
              </Link>
              <Link href={`/fixtures/${fixture?.uId}`}>
                <a className="text-primaryRed underline">Match Report</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFixtures;
