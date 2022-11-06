import React from "react";
import { formatDate } from "../utils";

const MemberStatistics = ({ member }: any) => {
  return (
    <section className=" p-2 w-full">
      <div className="stats-wrapper flex py-4">
        <div className="match stats flex flex-wrap  w-4/5 justify-between">
          <div className="flex flex-col shadow-md px-6 py-4 rounded-md w-48 ">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Position
            </h2>
            <i>{member.position}</i>
          </div>

          <div className="flex flex-col shadow-md px-6 py-4 rounded-md">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Date of birth
            </h2>
            <i>
              {member?.dob &&
                formatDate(member?.dob?.seconds * 1000, "dd-MM-yyy")}
            </i>
          </div>

          <div className="flex flex-col shadow-md px-6 py-4 rounded-md">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Date Joined
            </h2>
            <i>
              {member?.joinDate &&
                formatDate(member?.joinDate?.seconds * 1000, "dd-MM-yyy")}
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberStatistics;
