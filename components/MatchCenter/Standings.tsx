import { leagueStandings } from "../../public/resources/resources";

const Standings = () => {
  return (
    <div className="league-standings  p-2 text-blackX flex flex-col items-center justify-center">
      <h2 className="uppercase text-2xl text-left sm:w-2/3 w-full py-5">
        League Standings
      </h2>
      <table className="table-fixed sm:w-2/3 w-full border-2 border-slate-100">
        <thead className="text-left">
          <th className="p-2">Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Lost</th>
          <th className="sm:table-cell hidden">GF</th>
          <th className="sm:table-cell hidden">GA</th>
          <th>Points</th>
        </thead>
        {leagueStandings.map((team) => {
          return (
            <tr
              className={`sm:h-10 h-auto sm:text-sm text-xs shadow-lg ${
                team.name === "Impala Saracens"
                  ? "bg-primaryRed text-white"
                  : " text-blackX"
              }`}
            >
              <td className="p-1">{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td className="sm:table-cell hidden">{team.goalsFor}</td>
              <td className="sm:table-cell hidden">{team.goalsAgainst}</td>
              <td>{team.points}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Standings;
