import "./training.scss";
import "../../../Profile/profile.scss";
import { teamContext } from "../../../../contexts/team-context";
import { useContext } from "react";
import TrainingTable from "./TrainingTable";

const Training = ({ active }) => {
  const { players } = useContext(teamContext);

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
      <TrainingTable
        players={players}
        getConsistency={getConsistency}
        getPercentage={getPercentage}
      />
    </div>
  );
};

export default Training;
