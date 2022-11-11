import React from "react";
import { IFB } from "../../stores/gamesStore";
import { Member } from "../../stores/teamsStore";
import MemberStatistics from "./MemberStatistics";

interface Props {
  member: Member | IFB | undefined;
}
const MemberAbout = ({ member }: Props) => {
  return (
    <section className="member-about p-2 flex-1 w-full flex flex-col items-center ">
      <h2 className="font-bold text-2xl">Biography</h2>
      <div className="member-about-text sm:w-2/3 w-full flex items-center  p-2 border-slate-100 border-2 shadow-md">
        <p className="leading-8 tracking-widest ">
          {member?.bio ? member.bio : "Player bio will be updated soon"}
        </p>
      </div>
      <MemberStatistics member={member} />
    </section>
  );
};

export default MemberAbout;
