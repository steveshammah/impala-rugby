import { useContext } from "react";
import "./widgets.scss";
import { teamContext } from "../../../src/contexts/team-context";
import PlayerWidgetSm from "./PlayerWidgetSm";

const WidgetSm = ({ getConsistency, getPercentage }) => {
  const { team } = useContext(teamContext);
  return (
    <div className="widget-small">
      <h2>Player Consistency</h2>
      <div className="player-widgets-sm">
        {team.map((member) => {
          return (
            <PlayerWidgetSm
              member={member}
              getConsistency={getConsistency}
              getPercentage={getPercentage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WidgetSm;
