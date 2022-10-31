import React from "react";

const MemberStatistics = ({ member }) => {
  return (
    <section className=" p-2 w-full">
      <div className="stats-wrapper flex py-4">
        <div className="match stats flex flex-wrap  w-4/5 justify-between">
          <div className="flex flex-col shadow-md px-6 py-4 rounded-md w-48 ">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Position
            </h2>
            <i>Backrow</i>
          </div>

          <div className="flex flex-col shadow-md px-6 py-4 rounded-md">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Date of birth
            </h2>
            <i>01 Jan 1990</i>
          </div>

          <div className="flex flex-col shadow-md px-6 py-4 rounded-md">
            <h2 className="text-lg text-whiteX uppercase font-bold">
              Date of Joined
            </h2>
            <i>01 Jan 2020</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberStatistics;
