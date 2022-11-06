import Standings from "../MatchCenter/Standings";
import LogWidget from "./LogWidget";
import WidgetSm from "./WidgetSm";

const WidgetBg = () => {
  const getPercentage = (daysTrained: number, daysMissed: number) => {
    let percentage;
    if (daysMissed === 0) {
      percentage = 1;
    } else {
      const totalDays = daysTrained + daysMissed;
      percentage = (daysTrained / 100) * totalDays;
    }

    return Math.floor(percentage * 100);
  };
  const getConsistency = (daysTrained: number, daysMissed: number) => {
    const percentage = getPercentage(daysTrained, daysMissed);
    let consistency;
    if (percentage === 100) {
      consistency = "consistent";
    } else if (percentage >= 50) {
      consistency = "good";
    } else if (percentage < 50) {
      consistency = "inconsistent";
    }
    return consistency;
  };
  return (
    <div className="widget-big flex sm:flex-row flex-col align-start ">
      <div className="flex flex-col">
        <LogWidget />
        <WidgetSm
          getConsistency={getConsistency}
          getPercentage={getPercentage}
        />
      </div>
      <div className="league-standings bg-white flex-1">
        <Standings />
      </div>
    </div>
  );
};

export default WidgetBg;
