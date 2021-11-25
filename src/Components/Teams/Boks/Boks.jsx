import "./boks.scss";
import { teamContext } from "../../../contexts/team-context";
import { useContext } from "react";

const Boks = ({ active }) => {
  // const currentYear = new Date().getFullYear();
  const { players } = useContext(teamContext);
  const boks = players.filter((player) => player.team === "boks");

  return (
    <div
      className={`boks-container list-container && ${
        active === "boks" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Boks</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {boks.map((player) => (
          <tr>
            <td>{player.name}</td>
            <td>{player.appearances}</td>
            <td>{player.dob}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Boks;
