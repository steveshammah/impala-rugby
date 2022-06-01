import Link from "next/link";
import { Button } from "@mui/material";




const PlayerWidgetSm = ({ member, getConsistency, getPercentage }: any) => {
  return (
    <section className='player-info'>
      <div className='player-image'>
        <img src={member.img} alt='' />
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
      <Link href={`/players-and-staff/${member.id}`} passHref>
        <Button variant='outlined'>View Profile</Button>
      </Link>
    </section>
  );
};

export default PlayerWidgetSm;
