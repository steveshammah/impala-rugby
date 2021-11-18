import "./allowance.scss";
import "../../../Profile/profile.scss";

export const Allowance = ({ players, active }) => {
  const allowanceRate = 200;

  return (
    <div
      className={`allowance-container list-container && ${
        active === "allowance" ? "active-link" : ""
      }`}>
      <h2>Allowance</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Session Count</td>
          <td>Accrued Allowance</td>
        </thead>
        {players.map((player, index) => (
          <tr>
            <td>
              {/* Set index count to start from 1 */}
              {index + 1}.{player.name}
            </td>
            <td>{player.daysTrained}</td>
            <td>{player.daysTrained * allowanceRate}</td>
          </tr>
        ))}
        <tr>
          <td>
            <strong>{players.length}</strong>
          </td>
          <td>
            <strong></strong>
          </td>
        </tr>
      </table>
    </div>
  );
};
