import React, { useState, useMemo } from "react";
import { allFixtures, logos } from "../../public/resources/resources";
import { useRouter } from "next/router";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const MatchReview = () => {
  const [position, setPosition] = useState(0);
  const router = useRouter();
  const team = router.query.team;
  const matchId = router.query.id;

  const activeMatch = useMemo(
    () => allFixtures[team].filter((fixture: any) => fixture.id == matchId),
    [team, matchId]
  )[0];

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
    <div className="match-review-container w-full flex sm:flex-row flex-col justify-between items-center my-2">
      <div className="flex items-center justify-evenly flex-col">
        <div className="flex flex-col h-1/2 w-5/6 mb-4">
          <div className="bg-primaryRed text-white w-full p-1">
            <span>{activeMatch?.league}</span> | <span>{activeMatch?.day}</span>
          </div>
          <div className="w-full">
            {activeMatch?.home ? (
              // Home Game
              <div className="teams flex items-center justify-center h-4/5 w-full ">
                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase">Impala</h2>
                  <div className="team-logo">
                    <img
                      src={logos.impalaLogo?.src}
                      alt="Impala Logo"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-bold">VS</h1>

                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase">{activeMatch?.opponent}</h2>
                  <div className="team-logo">
                    <img
                      src={activeMatch.logo.src}
                      alt="Opponent logo"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Away Match
              <div className="teams flex items-center justify-center h-4/5 w-full ">
                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase">{activeMatch?.opponent}</h2>
                  <div className="team-logo">
                    <img
                      src={activeMatch?.logo?.src}
                      alt="Opponent logo"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-bold">VS</h1>

                <div className="team w-2/5 h-full text-blackX flex items-center flex-col">
                  <h2 className="uppercase">Impala</h2>
                  <div className="team-logo">
                    <img
                      src={logos.impalaLogo?.src}
                      alt="Impala Logo"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-5/6 justify-between mt-2">
          <div className="title-nav  bg-primaryRed text-white w-full p-1 flex items-center justify-between">
            <h2 className="uppercase text-md">Match Stats</h2>

            <div className="nav-btn flex">
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
            className="match-report flex justify-around text-blackX"
            style={{ transform: `translateX(${position}px)` }}
          >
            {activeMatch?.played ? (
              <>
                <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                  <h3 className="text-light ">Scores</h3>
                  <h5 className="text-sm text-primaryRed">Impala:{12} </h5>
                  <h5 className="text-sm">{activeMatch?.opponent}: 28</h5>
                </div>
                <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                  <h3 className="text-light ">Trys</h3>
                  <h5 className="text-sm text-primaryRed">Impala: 2 </h5>
                  <h5 className="text-sm">{activeMatch?.opponent}: 5</h5>
                </div>
                <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                  <h3 className="text-light ">Conversions</h3>
                  <h5 className="text-sm text-primaryRed ">Impala: 2/2</h5>
                  <h5 className="text-sm">{activeMatch?.opponent}: 3/5</h5>
                </div>
                <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                  <h3 className="text-light ">Penalties</h3>
                  <h5 className="text-sm text-primaryRed">Impala: 4/6 </h5>
                  <h5 className="text-sm">{activeMatch?.opponent}: 1/3</h5>
                </div>

                <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                  <h3 className="text-light  ">Venue</h3>
                  <h5 className="text-sm text-primaryRed">
                    {activeMatch?.venue}
                  </h5>
                </div>
              </>
            ) : (
              <div className="report-card h-24 w-44 rounded-md shadow-md p-2 uppercase">
                <h3 className="text-light ">Not Played</h3>

                {/* <h5>Match</h5> */}
                <h5 className="text-sm text-primaryRed">Stats Unavailable</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center h-full flex-1">
        <div className=" bg-blackX text-whiteX  flex-1 flex flex-col justify-between p-1  h-1/2">
          <h3 className=" uppercase text-lg">Impala</h3>
          {/* Starting Lineup */}
          <div className="pl-7">
            {/* <h4> Line Ups</h4> */}
            {activeMatch?.played ? (
              <ol
                style={{ display: activeMatch?.played ? "block" : "none" }}
                className="list-decimal"
              >
                <li>Loose Head Prop</li>
                <li>Hooker</li>
                <li>Tight Head Prop</li>
                <li>Second Row</li>
                <li>Second Row</li>
                <li>Blind Side Flanker</li>
                <li>Open Side Flanker</li>
                <li>8th Man</li>
                <li>Scrum Half</li>
                <li>Fly Half</li>
                <li>Left Wing</li>
                <li>Inside Center</li>
                <li>Outside Center</li>
                <li>Right Wing</li>
                <li>Full Back</li>
              </ol>
            ) : (
              <h2>Line Ups will be available on match day</h2>
            )}
          </div>
          {/* Substitutes */}
          <div
            className="pl-7"
            style={{ display: activeMatch?.played ? "block" : "none" }}
          >
            <h4 className="text-lg text-primaryRed">Substitutes</h4>
            <ol start={16} className="list-decimal ">
              <li>Front Row</li>
              <li>Front Row</li>
              <li>Front Row</li>
              <li>Back Row</li>
              <li>Half Back</li>
              <li>Utility Back</li>
              <li>Utility Back</li>
              <li>Utility Back</li>
            </ol>
          </div>
        </div>
        <div className=" h-full flex-1 flex flex-col justify-between p-1">
          <h3 className=" uppercase text-lg">{activeMatch?.opponent}</h3>
          <div className="pl-7">
            {/* <h4> Line Ups</h4> */}
            {activeMatch?.played ? (
              <ol
                style={{ display: activeMatch?.played ? "block" : "none" }}
                className="list-decimal"
              >
                <li>Loose Head Prop</li>
                <li>Hooker</li>
                <li>Tight Head Prop</li>
                <li>Second Row</li>
                <li>Second Row</li>
                <li>Blind Side Flanker</li>
                <li>Open Side Flanker</li>
                <li>8th Man</li>
                <li>Scrum Half</li>
                <li>Fly Half</li>
                <li>Left Wing</li>
                <li>Inside Center</li>
                <li>Outside Center</li>
                <li>Right Wing</li>
                <li>Full Back</li>
              </ol>
            ) : (
              <h2>Line Ups will be available on match day</h2>
            )}
          </div>

          <div
            className=" pl-7"
            style={{ display: activeMatch?.played ? "block" : "none" }}
          >
            <h4 className="text-lg text-primaryRed">Substitutes</h4>

            <ol start={16} className="list-decimal ">
              <li>Front Row</li>
              <li>Front Row</li>
              <li>Front Row</li>
              <li>Back Row</li>
              <li>Half Back</li>
              <li>Utility Back</li>
              <li>Utility Back</li>
              <li>Utility Back</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchReview;
