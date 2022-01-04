import { useState, useEffect } from "react";
import { allFixtures, logos } from "../../resources/resources";
import "./matchcenter.scss";

const MatchReview = ({ match }) => {
  const [activeMatch, setActiveMatch] = useState({});
  const team = match.params.team;
  const matchId = match.params.id;

  useEffect(() => {
    const matchToReview = allFixtures[`${team}`].filter(
      (fixture) => fixture.id === parseInt(matchId)
    );
    setActiveMatch(...matchToReview);
    return () => {};
  }, []);

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
          <h2>Match Stats</h2>
          <div className='match-report'>
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
          </div>
        </div>
      </div>
      <div className='team-lists'>
        <div className='line-up home'>
          <h3>Impala</h3>
          <div className='starting'>
            {/* <h4> Line Ups</h4> */}
            <ol>
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
          </div>

          <div className='substitutes'>
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
            <ol>
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
          </div>

          <div className='substitutes'>
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
