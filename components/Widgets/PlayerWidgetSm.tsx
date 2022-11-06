import Link from "next/link";
import React from "react";

const PlayerWidgetSm = ({ member }: any) => {
  return (
    <section className="player-info h-28 flex w-full items-center mb-1">
      <div className="player-image flex-1">
        <img
          src={member?.img?.src}
          alt=""
          className="h-20 w-20 object-cover rounded-full"
        />
      </div>
      <div className="player-meta">
        <h3>
          {member.firstname} {member.lastname}
        </h3>
        <span>
          <strong>Training Ratio: 50%</strong>
          <br />
          <strong className={""}>Remarks: Average</strong>
        </span>
        <span>
          <i>Team: </i>
          <strong className="capitalize"> {member.team}</strong>
        </span>
      </div>
      <Link href={`/squads/members/${member.id}`} passHref>
        <button>View Profile</button>
      </Link>
    </section>
  );
};

export default PlayerWidgetSm;
