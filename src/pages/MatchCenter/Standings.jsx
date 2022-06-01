import { leagueStandings } from "../../../public/resources/resources";

const Standings = () => {
  return (
    <div className='league-standings'>
      <h2>League Standings</h2>
      <table>
        <thead>
          <th>Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>Points</th>
        </thead>
        {leagueStandings.map((team) => {
          return (
            <tr className={team.name === "Impala Saracens" ? "impala" : ""}>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.points}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Standings;
