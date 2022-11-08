import Link from "next/link";
import { useEffect } from "react";
import { MdAddBox, MdPeopleOutline } from "react-icons/md";
import Shell from "../../../components/Layouts/DashboardShell";
import DataTable from "../../../components/DataTable/DataTable";
import { useTeamStore } from "../../../stores/teamsStore";
import { formatDate } from "../../../utils";

const Players = () => {
  const getMembers = useTeamStore((state) => state.getMembers);
  const members = useTeamStore((state) => state.members);

  useEffect(() => {
    getMembers();
  }, []);

  const links = [
    {
      label: "All",
      url: "/dashboard/members",
      icon: MdPeopleOutline,
    },
    {
      label: "Add Member",
      url: "/dashboard/members/create",
      icon: MdAddBox,
    },
  ];

  const columns = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Team",
      type: "text",
    },
    {
      label: "Dob",
      type: "text",
    },
    {
      label: "Role",
      type: "text",
    },
    {
      label: "Position",
      type: "text",
    },
    {
      label: "Socials",
      type: "multitext",
    },
    {
      label: "Actions",
      type: "actions",
    },
  ];

  return (
    <Shell links={links}>
      <DataTable columns={columns} title="Impala Members">
        {members.map((member, index) => {
          return (
            <tr
              className={`h-auto  sm:text-sm text-xs shadow-lg capitalize  text-blackX`}
              key={index}
            >
              <td className="p-2 capitalize">
                {member.firstname} {member.lastname}
              </td>
              <td>{member.team}</td>
              <td>
                {member?.dob &&
                  formatDate(member.dob.seconds * 1000, "dd-MM-yyyy")}
              </td>
              <td className="sm:table-cell hidden">{member.role}</td>
              <td>
                {member.position.map((pos, index) => (
                  <span key={index}>{pos} , </span>
                ))}
              </td>
              <td className="sm:table-cell hidden p-2">
                <div className="flex flex-col">
                  <div className=" flex">
                    <h2 className="italic text-whiteX">Twitter :</h2>
                    <h2 className="lowercase">
                      {member?.contacts?.twitter}
                    </h2>{" "}
                  </div>
                  <div className=" flex">
                    <h2 className="italic text-whiteX">Instagram :</h2>
                    <h2 className="lowercase">
                      {member?.contacts?.instagram}
                    </h2>{" "}
                  </div>
                  <div className=" flex">
                    <h2 className="italic text-whiteX">Email :</h2>
                    <h2 className="lowercase">
                      {member?.contacts?.email}
                    </h2>{" "}
                  </div>
                </div>
              </td>

              <td>
                <div className="flex justify-around">
                  <button className="bg-primaryRed  w-16 p-1 rounded-md text-xs text-white">
                    Deactivate
                  </button>
                  <Link href={`/dashboard/members/edit/${member.id}`}>
                    <button className="bg-blackX rounded-md text-whiteX p-1 text-xs w-16">
                      Edit
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </DataTable>
    </Shell>
  );
};

export default Players;
