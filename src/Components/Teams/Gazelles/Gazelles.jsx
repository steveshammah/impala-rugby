import "./gazelles.scss";
import "../../Profile/profile.scss";
import { teamContext } from "../../../contexts/team-context";
import { useContext } from "react";

const Gazelles = ({ active }) => {
  // const currentYear = new Date().getFullYear();
  const { players } = useContext(teamContext);
  const gazelles = players.filter((player) => player.team === "gazelles");

  return (
    <div
      className={`gazelles-container list-container && ${
        active === "gazelles" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Gazelles</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {gazelles.map((player) => (
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

export default Gazelles;
