import React from "react";

interface Props {
  name: string;
  team?: any[];
}
const TeamList = ({ name, team }: Props) => {
  return (
    <div
      className={`${
        name === "impala" ? "bg-blackX text-whiteX" : "bg-whiteX text-blackX"
      }  flex-1 flex flex-col justify-start p-1  h-1/2 min-h-[20vh]`}
    >
      <h3 className=" uppercase text-lg">{name}</h3>
      {/* Starting Lineup */}
      <div className="lg:pl-10 pl-8 sm:pl-8 md:pl-10">
        {team ? (
          <ol
            style={{ display: team ? "block" : "none" }}
            className="list-decimal"
          >
            {Object.entries(team).map((player, index: number) => {
              if (index + 1 < 16) {
                return (
                  <li
                    key={index}
                    className="capitalize text-[13px] md:text-[18px]"
                  >
                    {player[1]}
                  </li>
                );
              } else {
                <></>;
              }
            })}
          </ol>
        ) : (
          <h2 className="sm:text-[8px] text-sm">
            Line Ups will be available on match day
          </h2>
        )}
      </div>
      {/* Substitutes */}
      {team && (
        <div
          className="lg:pl-10 pl-8 sm:pl-8 md:pl-10"
          style={{ display: team ? "block" : "none" }}
        >
          <h4 className="text-lg text-primaryRed">Substitutes</h4>
          <ol start={16} className="list-decimal ">
            {Object.entries(team).map((player, index: number) => {
              if (index + 1 > 15) {
                return (
                  <li
                    key={index}
                    className="capitalize text-[13px] md:text-[18px]"
                  >
                    {player[1]}
                  </li>
                );
              } else {
                <></>;
              }
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TeamList;
