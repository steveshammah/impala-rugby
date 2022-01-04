import { Button } from "@mui/material";
import { allFixtures, logos } from "../../resources/resources";
import "./landing-page.scss";

const MatchesContainer = ({ position }) => {
  const { Men } = allFixtures;
  return (
    <div
      className='matches container-md-wrapper'
      style={{ transform: `translateX(${position}%)` }}>
      {Men.map((match) => {
        return (
          <div className='match container-card'>
            <div className='date-details'>
              <h3>{match.league}</h3>
              {match.day} <br />
              {match.kickOff}, {match.venue}
            </div>
            {match.venue !== "Impala Grounds" ? (
              <div className='team-logos'>
                <img src={match.logo} alt='' />
                {match.played ? (
                  <span>{match.scores}</span>
                ) : (
                  <span>{match.kickOff}</span>
                )}
                <img src={logos.impalaLogo} alt='' />
              </div>
            ) : (
              <div className='team-logos'>
                <img src={logos.impalaLogo} alt='' />
                {match.played ? (
                  <span>{match.scores}</span>
                ) : (
                  <span>{match.kickOff}</span>
                )}
                <img src={match.logo} alt='' />
              </div>
            )}
            <div className='teams'>
              {match.home ? (
                <span>
                  <h3>Impala</h3> Vs
                  <h3>{match.opponent}</h3>
                </span>
              ) : (
                <span>
                  <h3>{match.opponent}</h3> Vs
                  <h3>Impala</h3>
                </span>
              )}
              {match.played ? (
                <Button variant='outlined'>
                  <a href={`/match-review/Men/${match.id}`}> Match Review</a>
                </Button>
              ) : match.home ? (
                <Button variant='outlined'>
                  <a href={`/tickets/${match.id}`}>Tickets</a>
                </Button>
              ) : (
                <Button variant='outlined'>
                  <a href={`/match-center/${match.id}`}> Match Center</a>
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchesContainer;
