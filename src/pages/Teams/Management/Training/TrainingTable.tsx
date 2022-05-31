import React from "react";

const TrainingTable = ({ players, getConsistency, getPercentage }) => {
  return (
    <table>
      <thead>
        <td>Player Name</td>
        <td>Consistency</td>
        <td>Average Appearances</td>
      </thead>
      {players.map((player, index) => (
        <tr key={player.name}>
          <td>
            {/* Set index count to start from 1 */}
            {index + 1}.{player.name}
          </td>
          <td>
            <span
              className={getConsistency(player.daysTrained, player.daysMissed)}
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
  );
};

export default TrainingTable;
