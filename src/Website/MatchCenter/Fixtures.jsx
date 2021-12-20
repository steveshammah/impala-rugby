import React from "react";
import { fixtures, logos } from "../../resources/resources";

const Fixtures = () => {
  const toBePlayed = fixtures.filter((fixture) => !fixture.played);
  return (
    <div className='fixtures-center'>
      <div className='fixtures-wrapper'>
        <div className='monthly-fixtures'>
          <h2>DECEMBER 2021</h2>
          {toBePlayed.map((fixture) => (
            <div className='fixture-container'>
              <div className='date-details'>
                {fixture.day} | {fixture.league}
              </div>
              {fixture.home ? (
                <div className='teams'>
                  <div className='team-details'>
                    <h4>Impala</h4>
                    <img src={logos.impalaLogo1} alt='' />
                  </div>
                  <span>{fixture.kickOff}</span>

                  <div className='team-details'>
                    <img src={fixture.logo} alt='' />

                    <h4>{fixture.opponent} </h4>
                  </div>
                </div>
              ) : (
                <div className='teams'>
                  <div className='team-details'>
                    <h4>{fixture.opponent} </h4>
                    <img src={fixture.logo} alt='' />
                  </div>
                  <span>{fixture.kickOff}</span>
                  <div className='team-details'>
                    <img src={logos.impalaLogo1} alt='' />

                    <h4>Impala</h4>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
