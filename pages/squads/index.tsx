import React, { useEffect, useState } from "react";
import { useTeamStore } from "@stores/teamsStore";
import Link from "next/link";
import Image from "@components/Image";
import { eventLogger } from "@utils/utils";
import Loader from "@components/Loader";

const Squads = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [activeTeam, setActiveTeam] = useState([]);
  const members = useTeamStore((state) => state.members);
  const links = ["all", "gazelle", "women", "swaras", "tech-bench"];

  useEffect(() => {
    const selectedTeam = members.filter((member) =>
      member?.team?.includes(activeLink)
    );
    setActiveTeam(activeLink === "all" ? members : selectedTeam);
  }, [activeLink, members]);

  useEffect(() => {
    eventLogger({
      event: "View Squad",
    });
  }, []);
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="bg-blackX text-whiteX flex justify-center items-center flex-col py-5">
      <h2 className="uppercase flex items-center font-black sm:text-5xl text-2xl">
        Impala Rugby Squad
      </h2>

      <div className="sm:h-12 h-8 sm:w-1/2 w-full border-primaryRed border-2 sm:my-5 my-2">
        <ul className="flex justify-between w-full h-full ">
          {links.map((link, index) => (
            <li
              onClick={() => handleClick(link)}
              className="flex-1 flex items-center w-full h-full"
              key={index}
            >
              <Link href={`?${link}`}>
                <a
                  className={`
                  sm:text-xl text-xs h-full border-r-2 border-primaryRed w-full capitalize flex justify-center items-center font-semibold
                  ${activeLink === link ? "bg-primaryRed text-whiteX" : ""} 
                  `}
                >
                  {link}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-around flex-wrap p-2 lg:w-5/6 w-full">
        {activeTeam.length > 0 ? (
          activeTeam.map((member) => (
            <Link
              href={`/squads/members/${encodeURIComponent(member.id)}`}
              key={member.id}
            >
              <div className="lg:h-64 h-52 lg:w-48 w-40 m-2 shadow-primaryRed shadow-sm rounded-sm overflow-hidden flex flex-col">
                <Image
                  src={member?.firstname ? member.firstname : "impalaLogo"}
                  alt={`${member?.name} image`}
                  className="object-fill h-4/5 w-full rounded-t-sm"
                />
                <span className="flex flex-col items-center justify-between p-1">
                  <h3 className="font-semibold uppercase text-sm">
                    {member?.firstname} {member?.lastname}
                  </h3>
                  <h5 className="uppercase text-xs">
                    {member?.position?.map((pos, index: number) => (
                      <i className="capitalize" key={index}>
                        {pos}{" "}
                      </i>
                    ))}
                  </h5>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Squads;
