import "./Fixtures.scss";
import "../../../Profile/profile.scss";


export const Fixtures = ({ active }) => {
  // const currentYear = new Date().getFullYear();

  return (
    <div
      className={`fixtures-container list-container && ${
        active === "fixtures" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Fixtures</h2>
      <table>
        <thead>
          <td>Team</td>
          <td>Match Date</td>
          <td>Venue</td>
          <td>Standings</td>
        </thead>
        {/* {players.map((player) => (
          <tr>
            <td>{player.name}</td>
            <td>
              <span className={player.consistency}></span>{" "}
              <small> {player.training_ratio}</small>
            </td>
            <td>{player.appearances}</td>
            <td>{player.dob}</td>
          </tr>
        ))} */}
      </table>
    </div>
  );
};
