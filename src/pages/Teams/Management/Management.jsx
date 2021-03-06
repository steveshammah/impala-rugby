import "./management.scss";
import { teamContext } from "../../../../contexts/team-context";
import { useContext } from "react";

const Management = ({ active }) => {
  const { players } = useContext(teamContext);

  const management = players.filter((player) => player.team === "management");

  return (
    <div
      className={`management-container list-container && ${
        active === "management" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Management</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {management.map((player) => (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.appearances}</td>
            <td>{player.dob}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Management;
