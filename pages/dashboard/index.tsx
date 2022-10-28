import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Summary from "../../components/Summary/Summary";
import WidgetBg from "../../components/Widgets/WidgetBg";
import WidgetSm from "../../components/Widgets/WidgetSm";
import WidgetSmX from "../../components/Widgets/WidgetSmX";

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
        {/* <div className="widgets-small-container">
          <WidgetSm
            getConsistency={getConsistency}
            getPercentage={getPercentage}
          />
          <WidgetSmX />
        </div>
        <WidgetBg /> */}
      </div>
    </div>
  );
};

export default Dashboard;
