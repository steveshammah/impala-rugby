import { useState, useEffect } from "react";
import { allFixtures, logos } from "../../public/resources/resources";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./matchcenter.scss";

const MatchReview = ({ match }) => {
  const [activeMatch, setActiveMatch] = useState({});
  const [position, setPosition] = useState(0);
  const team = match.params.team;
  const matchId = match.params.id;

  useEffect(() => {
    const matchToReview = allFixtures[`${team}`].filter(
      (fixture) => fixture.id === parseInt(matchId)
    );
    setActiveMatch(...matchToReview);
    return () => {};
  }, []);

  const changePosition = (direction) => {
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
    <div className='match-review-container'>
      <div className='match-details'>
        <div className='fixture-details'>
          <div className='tournament'>
            <span>{activeMatch.league}</span> | <span>{activeMatch.day}</span>
          </div>
          <div className='teams'>
            {activeMatch.home ? (
              <>
                <div className='team'>
                  <h2>Impala</h2>
                  <div className='team-logo'>
                    <img src={logos.impalaLogo} alt='' />
                  </div>
                </div>
                <h1>VS</h1>

                <div className='team'>
                  <h2>{activeMatch.opponent}</h2>
                  <div className='team-logo'>
                    <img src={activeMatch.logo} alt='' />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='team'>
                  <h2>{activeMatch.opponent}</h2>
                  <div className='team-logo'>
                    <img src={activeMatch.logo} alt='' />
                  </div>
                </div>
                <h1>VS</h1>

                <div className='team'>
                  <h2>Impala</h2>
                  <div className='team-logo'>
                    <img src={logos.impalaLogo} alt='' />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='match-stats'>
          <div className='title-nav'>
            <h2>Match Stats</h2>

            <div className='nav-btn'>
              <ArrowBackIosNewIcon
                className='icon'
                onClick={() => changePosition("+")}
              />
              <ArrowForwardIosIcon
                className='icon'
                onClick={() => changePosition("-")}
              />
            </div>
          </div>

          <div
            className='match-report'
            style={{ transform: `translateX(${position}px)` }}>
            {activeMatch.played ? (
              <>
                <div className='report-card'>
                  <h3>Scores</h3>
                  <h5>Impala:{12} </h5>
                  <h5>{activeMatch.opponent}: 28</h5>
                </div>
                <div className='report-card'>
                  <h3>Trys</h3>
                  <h5>Impala: 2 </h5>
                  <h5>{activeMatch.opponent}: 5</h5>
                </div>
                <div className='report-card'>
                  <h3>Conversions</h3>
                  <h5>Impala: 2/2</h5>
                  <h5>{activeMatch.opponent} 3/5</h5>
                </div>
                <div className='report-card'>
                  <h3>Penalties</h3>
                  <h5>Impala: 4/6 </h5>
                  <h5>{activeMatch.opponent}: 1/3</h5>
                </div>

                <div className='report-card'>
                  <h3>Venue</h3>
                  <h5>{activeMatch.venue}</h5>
                </div>
              </>
            ) : (
              <div className='report-card'>
                <h3>Not Played</h3>

                {/* <h5>Match</h5> */}
                <h5>Stats Unavailable</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='team-lists'>
        <div className='line-up home'>
          <h3>Impala</h3>
          <div className='starting'>
            {/* <h4> Line Ups</h4> */}
            {activeMatch.played ? (
              <ol style={{ display: activeMatch.played ? "block" : "none" }}>
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
            className='substitutes'
            style={{ display: activeMatch.played ? "block" : "none" }}>
            <h4>Substitutes</h4>
            <ol start={16}>
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
        <div className='line-up away'>
          <h3>{activeMatch.opponent}</h3>
          <div className='starting'>
            {/* <h4> Line Ups</h4> */}
            {activeMatch.played ? (
              <ol style={{ display: activeMatch.played ? "block" : "none" }}>
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
            className='substitutes'
            style={{ display: activeMatch.played ? "block" : "none" }}>
            <h4>Substitutes</h4>
            <ol start={16}>
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
