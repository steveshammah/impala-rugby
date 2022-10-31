import React, { useEffect, useState } from "react";
import { team } from "../../public/resources/resources";
import Link from "next/link";

const Squads = () => {
  const [activeLink, setActiveLink] = useState("All");
  const [activeTeam, setActiveTeam] = useState(team);

  useEffect(() => {
    const selectedTeam = team.filter((member) => member.team === activeLink);
    setActiveTeam(activeLink === "All" ? team : selectedTeam);
  }, [activeLink]);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  const links = ["All", "Men", "Women", "Swaras", "Coaches"];
  return (
    <div className="bg-blackX text-whiteX flex justify-center items-center flex-col py-5">
      <h2 className="uppercase flex items-center font-black text-5xl">
        Impala Rugby Squad
      </h2>

      <div className="h-12 w-1/2 border-primaryRed border-2 my-5">
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
                  text-xl h-full border-r-2 border-primaryRed w-full flex justify-center items-center font-semibold
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

      <div className="squad-members flex justify-around flex-wrap p-2 w-5/6 ">
        {activeTeam.map((member) => (
          <Link
            href={`/squads/players/${encodeURIComponent(member.id)}`}
            key={member.id}
          >
            <div
              className="h-64 w-48 m-2 shadow-primaryRed shadow-sm rounded-sm overflow-hidden flex flex-col"
              // className="flex flex-col h-full w-full"
            >
              <img
                src={member.img.src}
                alt={`${member.name} image`}
                className="object-fill h-4/5 w-full rounded-t-sm"
              />
              <span className="flex flex-col items-center justify-between p-1">
                <h3 className="font-semibold">{member.name}</h3>
                <h5 className="uppercase text-xs">{member.team}</h5>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Squads;
