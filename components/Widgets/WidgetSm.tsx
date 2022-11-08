import React from "react";
import { useTeamStore } from "../../stores/teamsStore";
import PlayerWidgetSm from "./PlayerWidgetSm";

const WidgetSm = ({ getConsistency, getPercentage }: any) => {
  const members = useTeamStore(state => state.members);
  return (
    <div className="widget-small  h-96 w-96 overflow-y-scroll my-8">
      <h2 className="font-bold text-lg">Player Consistency</h2>
      <div className="player-widgets-sm  ">
        {members.map((member: any, index: number) => {
          return (
            <PlayerWidgetSm
              member={member}
              getConsistency={getConsistency}
              getPercentage={getPercentage}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WidgetSm;
