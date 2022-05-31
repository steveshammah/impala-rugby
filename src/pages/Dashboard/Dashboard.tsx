import TopBar from "./TopBar/TopBar";
import Summary from "./Summary/Summary";
import "./dashboard.scss";
import WidgetBg from "./Widgets/WidgetBg";
import WidgetSm from "./Widgets/WidgetSm";
import WidgetSmX from "./Widgets/WidgetSmX";

const Dashboard = () => {
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
    } else if (percentage >= 50) {
      consistency = "good";
    } else if (percentage < 50) {
      consistency = "inconsistent";
    }
    return consistency;
  };
  return (
    <div className="home container">
      <TopBar />
      <Summary />

      <div className="widgets">
        <div className="widgets-small-container">
          <WidgetSm
            getConsistency={getConsistency}
            getPercentage={getPercentage}
          />
          <WidgetSmX />
        </div>
        <WidgetBg />
      </div>
    </div>
  );
};

export default Dashboard;
