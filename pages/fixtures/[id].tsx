import React, { useEffect } from "react";
import { logos } from "@public/resources/resources";
import { useRouter } from "next/router";
import { MdStarRate } from "react-icons/md";
import { useFixtureStore } from "@stores/gamesStore";
import { eventLogger, formatDate } from "@utils/utils";
import TeamList from "@components/MatchCenter/TeamList";
import Carousel from "@components/Carousel";
import Link from "next/link";
import MoreStories from "@components/LandingPage/MoreStories";

const MatchReview = () => {
  const router = useRouter();
  const matchId = String(router?.query?.id);

  const fixture = useFixtureStore((state) => state.fixture);
  const getFixture = useFixtureStore((state) => state.getFixture);
  const fixtures = useFixtureStore((state) => state.fixtures);

  useEffect(() => {
    matchId && getFixture(matchId);
    eventLogger({
      event: `View Fixture: ${matchId}`,
    });
  }, [matchId]);

  const matchesDetails = {
    title: "Matches",
    linkName: "Match Center",
    url: "fixtures",
  };

  const matches = fixtures.map((match, index) => {
    return (
      <div
        key={index}
        className="carousel-item flex flex-col h-[300px] shadow-lg hover:shadow-2xl m-4 rounded-md p-1"
        style={{ width: 300 }}
      >
        <div className="flex-1 flex flex-col items-center w-full ">
          <h4 className="uppercase font-bold">{match.competition}</h4>
          {formatDate(match?.kickOff.seconds * 1000, "long")}

          <span className="capitalize">
            {formatDate(match?.kickOff.seconds * 1000, "time")}{" "}
          </span>

          <span className="capitalize italic">{match.venue}</span>
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
                {match.opponentScores.ft}-{match.impalaScores.ft}
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
        <div className="teams flex flex-1 items-center  justify-center flex-col h-28">
          {
            <Link href={`/fixtures/${match.uId}`}>
              <button
                className={` font-thin p-2 rounded-full px-4 ${
                  match?.played
                    ? "bg-primaryRed text-white"
                    : "bg-white border border-gray-400"
                }`}
              >
                {match?.played ? "Match Report" : "  Match Details"}
              </button>
            </Link>
          }
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="w-full flex lg:flex-row md:flex-col flex-col justify-between sm:items-start items-center my-2 mb-10 ">
        <div className="flex lg:flex-1 md:flex-1 flex-none items-center justify-evenly flex-col sm:mb-0 mt-5">
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

                      <span className="bg-blackX lg:p-2 p-1 rounded-md text-whiteX mx-1">
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
                        src={
                          fixture?.logo ? fixture.logo.src : logos.kruLogo.src
                        }
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
                        src={
                          fixture?.logo ? fixture.logo.src : logos.kruLogo.src
                        }
                        alt="Opponent"
                        className="sm:h-52 h-40 w-40 sm:w-52 rounded-full object-contain aspect-video"
                      />
                    </div>
                  </div>

                  {fixture?.played ? (
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="text-2xl font-bold">FT</h2>

                      <span className="bg-blackX lg:p-2 p-1 rounded-md text-whiteX mx-1">
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
          <div className="flex flex-col items-center justify-center h-1/2 lg:w-full w-screen mb-4">
            <div className=" bg-primaryRed h-1/2 text-white w-10/12 flex items-center justify-between p-1">
              <h2 className="uppercase text-md">Match Stats</h2>

              <div className=" flex">
                <MdStarRate className="text-xl" />
              </div>
            </div>

            <div className="flex  justify-around text-blackX flex-wrap lg:w-2/3 w-full  ">
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
                    <h5 className="text-sm text-primaryRed">
                      {fixture?.venue}
                    </h5>
                  </div>
                </>
              ) : (
                <div className=" h-24 w-40 rounded-md shadow-md p-2 m-2 uppercase">
                  <h3 className="text-light ">Not Played</h3>

                  <h5 className="text-sm text-primaryRed">Stats Unavailable</h5>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center h-full lg:flex-1 md:flex-1  flex-none w-full">
          <TeamList name={"impala"} team={fixture?.impalaTeamList} />
          <TeamList name={fixture?.opponent} team={fixture?.opponentTeamList} />
        </div>
      </div>
      <Carousel items={matches} details={matchesDetails} />
      <MoreStories />
    </>
  );
};

export default MatchReview;
