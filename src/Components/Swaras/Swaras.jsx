import "./Swaras.scss";
import "../Profile/Profile.scss";

export const Swaras = ({ players, active }) => {
  // const currentYear = new Date().getFullYear();
  const swaras = players.filter((player) => player.team === "swaras");

  return (
    <div
      className={`swaras-container list-container && ${
        active === "swaras" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Swaras</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {swaras.map((player) => (
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
