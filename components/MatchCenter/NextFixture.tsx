import React from "react";
import { logos } from "@public/resources/resources";
import { formatDate } from "@utils/utils";

const NextFixture = ({ fixture }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="font-bold text-2xl mb-4">Next Fixture</h2>
      <div className="flex flex-col items-center h-70 sm:w-1/2 w-5/6 shadow-md rounded-md bg-blackX text-whiteX">
        <i className="text-sm capitalize w-full text-left pl-2 text-primaryRed">
          {fixture?.team}
        </i>

        <div className="flex items-center">
          <div className="flex flex-col">
            <img
              src={logos.impalaLogo.src}
              className="h-28 w-28 rounded-full object-contain"
              alt="Impala Logo"
            />
            <h4 className="capitalize mt-1">Impala</h4>
          </div>
          <h1 className="m-4 font-bold text-2xl">VS</h1>
          <div className="flex flex-col">
            <img
              src={logos.nondiesLogo.src}
              className="h-28 w-28 rounded-full object-contain"
              alt="Opponent Logo"
            />
            <h4 className="capitalize mt-1">{fixture?.opponent}</h4>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <h4 className="text-lg font-bold">Match Details</h4>
          <div className="flex flex-wrap w-full ">
            <div className="flex mx-4 mt-4">
              <strong>Competition: </strong>
              <i className="capitalize">{fixture?.competition}</i>
            </div>
            <div className="flex mx-4 mt-4">
              {fixture?.home ? <strong>Home </strong> : <strong>Away </strong>}{" "}
            </div>
            <div className="flex mx-4 mt-4">
              <strong>Venue: </strong>{" "}
              <i className="capitalize">{fixture?.venue}</i>
            </div>
            <div className="flex mx-4 mt-4">
              <strong>Date: </strong>
              <i>
                {fixture?.kickOff &&
                  formatDate(fixture?.kickOff?.seconds * 1000, "dd/MM/yy")}
              </i>
            </div>
            <div className="flex mx-4 mt-4">
              <strong>Kick Off: </strong>
              <i>
                {fixture?.kickOff &&
                  formatDate(fixture?.kickOff?.seconds * 1000, "HH:mm")}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextFixture;
