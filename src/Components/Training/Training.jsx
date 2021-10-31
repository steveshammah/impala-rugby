import "./Training.scss";
import "../Profile/Profile.scss";

export const Training = ({ players, active }) => {
  const getPercentage = (daysTrained, daysMissed) => {
    let percentage;
    if (daysMissed === 0) {
      percentage = 1;
    } else {
      const totalDays = daysTrained + daysMissed;
      percentage = (daysTrained / 100) * totalDays;
    }

    return Math.floor(percentage * 100);
  };
  const getConsistency = (daysTrained, daysMissed) => {
    const percentage = getPercentage(daysTrained, daysMissed);
    let consistency;
    if (percentage === 100) {
      consistency = "consistent";
    } else if (percentage >= 75) {
      consistency = "good";
    } else if (percentage >= 50) {
      consistency = "fair";
    } else if (percentage >= 35) {
      consistency = "good";
    } else if (percentage >= 10) {
      consistency = "inconsistent";
    }
    return consistency;
  };

  return (
    <div
      className={`training-container list-container && ${
        active === "training" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Training Summary</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
        </thead>
        {players.map((player, index) => (
          <tr>
            <td>
              {/* Set index count to start from 1 */}
              {index + 1}.{player.name}
            </td>
            <td>
              <span
                className={getConsistency(
                  player.daysTrained,
                  player.daysMissed
                )}
                style={{
                  width: `
                   ${getPercentage(player.daysTrained, player.daysMissed)}%
                  `,
                }}></span>
              <small>
                {" "}
                {getPercentage(player.daysTrained, player.daysMissed)}%
              </small>
            </td>
            <td>{player.appearances}</td>
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
