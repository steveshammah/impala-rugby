import "./ladies.scss";
import { teamContext } from "../../../contexts/team-context";
import { useContext } from "react";

const Ladies = ({ active }) => {
  // const currentYear = new Date().getFullYear();
  const { team } = useContext(teamContext);

  const ladies = team.filter((player) => player.team === "ladies");

  return (
    <div
      className={`ladies-container list-container && ${
        active === "ladies" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Ladies</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {ladies.map((player) => (
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

export default Ladies;
