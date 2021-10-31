import "./Management.scss";

export const Management = ({ players, active }) => {
  return (
    <div
      className={`management-container && ${
        active === "Management" ? "active-link" : ""
      }`}>
      <h2>Management</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {players.map((player) => (
          <tr>
            <td>{player.name}</td>
            <td>
              <span className={player.consistency}></span>{" "}
              <small> {player.training_ratio}</small>
            </td>
            <td>{player.appearances}</td>
            <td>{player.dob}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
