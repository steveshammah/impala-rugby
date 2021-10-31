import "./Fixtures.scss";
import "../Profile/Profile.scss";

export const Fixtures = ({ active }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`fixtures-container list-container && ${
        active === "fixtures" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Fixtures</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
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
