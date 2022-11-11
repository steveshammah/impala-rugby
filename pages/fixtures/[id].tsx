import React, { useState, useMemo, useEffect } from "react";
import { logos } from "../../public/resources/resources";
import { useRouter } from "next/router";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useFixtureStore } from "../../stores/gamesStore";
import { formatDate } from "../../utils";
import TeamList from "../../components/MatchCenter/TeamList";

const MatchReview = () => {
  const [position, setPosition] = useState(0);
  const router = useRouter();
  const matchId = String(router?.query?.id);

  const fixture = useFixtureStore((state) => state.fixture);
  const getFixture = useFixtureStore((state) => state.getFixture);

  useEffect(() => {
    matchId && getFixture(matchId);
  }, [matchId]);

  const changePosition = (direction: string) => {
    // Get direction and current position and build logic
    if (direction === "+") {
      // setCount(count < 2 && count + 1);

      setPosition(0);
    } else {
      // setCount(count < 2 && count + 1);

      setPosition(-440);
    }
  };

  return (
    <div className="w-full flex sm:flex-row flex-col justify-between sm:items-start items-center my-2 ">
      <div className="flex sm:flex-1 flex-none items-center justify-evenly flex-col sm:mb-0 mt-5">
        <div className="flex flex-col items-center justify-center h-1/2 sm:w-11/12 w-screen mb-4 sm:text-base text-sm">
          <div className="bg-primaryRed text-white w-11/12 p-1 capitalize">
            {fixture?.kickOff &&
              formatDate(fixture?.kickOff.seconds * 1000, "long")}{" "}
            | {fixture?.competition}
          </div>
          <div className="w-full">
            {fixture?.home ? (
              // Home Game
              <div className="flex items-center justify-center h-4/5 w-full ">
                <div className=" w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase font-bold">Impala</h2>
                  <div className="">
                    <img
                      src={logos.impalaLogo?.src}
                      alt="Impala"
                      className="sm:h-52 h-40 w-40 sm:w-52 rounded-full object-contain aspect-video"
                    />
                  </div>
                </div>

                {fixture?.played ? (
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">FT</h2>

                    <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                      {`${fixture?.impalaScores?.ft} -
                      ${fixture?.opponentScores.ft}`}
                    </span>
                  </div>
                ) : (
                  <h1 className="text-4xl font-bold">VS</h1>
                )}

                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase font-bold">{fixture?.opponent}</h2>
                  <div className="team-logo">
                    <img
                      src={fixture?.logo ? fixture.logo.src : logos.kruLogo.src}
                      alt="Opponent"
                      className="sm:h-52 h-40 w-40 sm:w-52 rounded-full object-contain aspect-video"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Away Match
              <div className=" flex flex-grow flex-1 items-center justify-center h-4/5 w-full ">
                <div className=" w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase font-bold">{fixture?.opponent}</h2>
                  <div className="">
                    <img
                      src={fixture?.logo ? fixture.logo.src : logos.kruLogo.src}
                      alt="Opponent"
                      className="sm:h-52 h-40 w-40 sm:w-52 rounded-full object-contain aspect-video"
                    />
                  </div>
                </div>

                {fixture?.played ? (
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">FT</h2>

                    <span className="bg-blackX p-2 rounded-md text-whiteX mx-1">
                      {`${fixture?.impalaScores.ft} -
                      ${fixture?.opponentScores.ft} `}
                    </span>
                  </div>
                ) : (
                  <h1 className="text-4xl font-bold">VS</h1>
                )}

                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase font-bold">Impala</h2>
                  <div className="team-logo">
                    <img
                      src={logos.impalaLogo?.src}
                      alt="Impala Logo"
                      className="sm:h-52 h-40 w-40 sm:w-52 rounded-full object-contain aspect-video"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-1/2 sm:w-full w-screen mb-4">
          <div className=" bg-primaryRed h-1/2 text-white w-10/12 flex items-center justify-between p-1">
            <h2 className="uppercase text-md">Match Stats</h2>

            <div className=" flex">
              <MdArrowBackIosNew
                className="cursor-pointer text-xl"
                onClick={() => changePosition("+")}
              />
              <MdArrowForwardIos
                className="cursor-pointer text-xl"
                onClick={() => changePosition("-")}
              />
            </div>
          </div>

          <div
            className="flex w-full justify-around text-blackX "
            style={{ transform: `translateX(${position}px)` }}
          >
            {fixture?.played ? (
              <>
                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light ">Scores</h3>
                  <h5 className="text-sm text-primaryRed">
                    Impala: {fixture?.impalaScores.ft}
                  </h5>
                  <h5 className="text-sm">
                    {fixture?.opponent}: {fixture?.opponentScores.ft}
                  </h5>
                </div>
                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light ">Tries</h3>
                  <h5 className="text-sm text-primaryRed">
                    Impala: {fixture?.impalaScores.tries}
                  </h5>
                  <h5 className="text-sm">
                    {fixture?.opponent}: {fixture?.opponentScores.tries}{" "}
                  </h5>
                </div>
                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light ">Conversions</h3>
                  <h5 className="text-sm text-primaryRed">
                    Impala: {fixture?.impalaScores.con}
                  </h5>
                  <h5 className="text-sm">
                    {fixture?.opponent}: {fixture?.opponentScores.con}{" "}
                  </h5>
                </div>
                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light ">Penalties</h3>
                  <h5 className="text-sm text-primaryRed">
                    Impala: {fixture?.impalaScores.pen}
                  </h5>
                  <h5 className="text-sm">
                    {fixture?.opponent}: {fixture?.opponentScores.pen}{" "}
                  </h5>
                </div>

                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light  ">Venue</h3>
                  <h5 className="text-sm text-primaryRed">{fixture?.venue}</h5>
                </div>
              </>
            ) : (
              <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                <h3 className="text-light ">Not Played</h3>

                {/* <h5>Match</h5> */}
                <h5 className="text-sm text-primaryRed">Stats Unavailable</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center h-full sm:flex-1 flex-none">
        <TeamList name={"impala"} team={fixture?.impalaTeamList} />
        <TeamList name={fixture?.opponent} team={fixture?.opponentTeamList} />
      </div>
    </div>
  );
};

export default MatchReview;
