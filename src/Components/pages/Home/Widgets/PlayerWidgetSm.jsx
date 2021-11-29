import { Visibility } from "@material-ui/icons";
import { profile } from "../../../../resources/resources";
import { Link } from "react-router-dom";

const PlayerWidgetSm = ({ member, getConsistency, getPercentage }) => {
  return (
    <div className='player-info'>
      <div className='player-image'>
        <img src={profile} alt='' />
      </div>
      <div className='player-meta'>
        <h3>{member.name}</h3>
        <span>
          <strong>
            Training Ratio:{" "}
            {getPercentage(member.daysTrained, member.daysMissed)}%
          </strong>
          <br />
          <strong
            className={getConsistency(member.daysTrained, member.daysMissed)}>
            Remarks: {getConsistency(member.daysTrained, member.daysMissed)}
          </strong>
        </span>
        <span>
          <i>Team: </i>
          <strong> {member.team}</strong>
        </span>
      </div>
      <Link to={`players-and-staff/${member.id}`} className='player-toggle'>
        <i>View Profile</i> <Visibility className='icon' />
      </Link>
    </div>
  );
};

export default PlayerWidgetSm;
