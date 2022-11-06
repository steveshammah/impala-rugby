import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useRef, Dispatch, SetStateAction } from "react";
import { formatDate } from "../../../utils";

interface Props {
  label: string;
  member: any;
  setMember: Dispatch<SetStateAction<any>>;
  submitHandler: any;
}

const MemberForm = ({ label, submitHandler, member, setMember }: Props) => {
  const memberForm = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.name;
    if (option === "Save") {
      submitHandler({
        ...member,

        created: Timestamp.now(),
      });
      memberForm && memberForm?.current?.reset();
      setMember({});
      return;
    } else if (option === "Edit") {
      submitHandler(member.id, { ...member, lastEdited: Timestamp.now() });
      router.back();
    } else {
      submitHandler({
        ...member,

        created: Timestamp.now(),
      });
      memberForm && memberForm?.current?.reset();
      setMember({});
      return;
    }
  };

  const updateHandler = (field: string, value?: any, option?: string) => {
    switch (field) {
      case "contacts":
        member[field] = { ...member[field], [option]: value };
        return setMember({
          ...member,
        });

      case "position":
        const newArr = value.split(",");
        member[field] = newArr;
        setMember({ ...member, [field]: value.split(",") });
        return;

      case "dob":
        const dob = Timestamp.fromMillis(Date.parse(new Date(value)));
        setMember({ ...member, [field]: dob });
        return;
      case "joinDate":
        const joinDate = Timestamp.fromMillis(Date.parse(new Date(value)));

        setMember({ ...member, [field]: joinDate });
        return;
      default:
        return setMember({ ...member, [field]: value });
    }
  };
  const roles = ["player", "coach", "management", "staff"];
  const teams = [
    "gazelle",
    "women",
    "swara",
    "age-grade",
    "management",
    "media",
    "tech",
  ];

  return (
    <form
      className="h-full flex flex-col justify-between w-full"
      ref={memberForm}
    >
      <h2 className="text-2xl font-bold w-full text-left">{label}</h2>
      <div className="flex flex-col p-4 w-full justify-center items-center my-4">
        {/* Names */}
        <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
          Full Name
        </h3>
        <div className="flex  justify-around p-2 w-full ">
          <input
            name="Firstname"
            className="p-1 border-b-2 border-slate-200  outline-none text-xl "
            aria-label="First name"
            placeholder="Firstname"
            onChange={(e) =>
              updateHandler("firstname", e.target.value.toLowerCase())
            }
            required
            value={member?.firstname}
          />
          <input
            name="Lastname"
            className="p-1 border-b-2 border-slate-200  outline-none text-xl "
            aria-label="Last name"
            placeholder="Lastname"
            onChange={(e) =>
              updateHandler("lastname", e.target.value.toLowerCase())
            }
            required
            value={member?.lastname}
          />
        </div>
        {/* Dates */}
        <div className=" flex items-center flex-col my-4  w-full p-4">
          <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
            Important Dates
          </h3>
          <div className="flex justify-around w-full my-4">
            {/* DOB */}
            <div className="flex items-center">
              <h3 className="text-blackX mr-4">Date Of Birth:</h3>
              <input
                name="DOB"
                className=" border-b-2 border-slate-200  outline-none text-lg "
                aria-label="DOB"
                placeholder="Dob"
                onChange={(e) => updateHandler("dob", e.target.value)}
                required
                type={"date"}
                value={
                  member?.dob &&
                  formatDate(member?.dob?.seconds * 1000, "yyy-MM-dd")
                }
              />
            </div>
            {/* Join Date */}
            <div className="flex items-center">
              <h3 className="text-whiteX mr-4">Join Date:</h3>
              <input
                name="JoinDate"
                className=" border-b-2 border-slate-200  outline-none text-lg "
                aria-label="JoinDate"
                placeholder="JoinDate"
                onChange={(e) => updateHandler("joinDate", e.target.value)}
                required
                type={"date"}
                value={
                  member?.joinDate &&
                  formatDate(member?.joinDate?.seconds * 1000, "yyy-MM-dd")
                }
              />
            </div>
          </div>
        </div>

        <div className=" flex items-center flex-col my-4 w-full">
          <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
            Member details
          </h3>
          <div className="flex justify-around w-full my-4">
            {/* Role */}
            <div className="flex items-center">
              <h3 className="text-whiteX mr-4">Role:</h3>
              <select
                name="Role"
                className=" border-b-2 border-slate-200  outline-none text-lg capitalize"
                aria-label="Role"
                onChange={(e) => updateHandler("role", e.target.value)}
                required
              >
                <option value="player">Select Role</option>
                {roles.map((role, index) => (
                  <option value={role} key={index}>
                    {role}
                  </option>
                ))}{" "}
              </select>
            </div>

            {/* Team */}
            <div className="flex items-center">
              <h3 className="text-whiteX mr-4">Team:</h3>
              <select
                name="Role"
                className=" border-b-2 border-slate-200  outline-none text-lg capitalize"
                aria-label="Role"
                onChange={(e) => updateHandler("team", e.target.value)}
                required
              >
                <option value="gazelle">Select Team</option>
                {teams.map((team, index) => (
                  <option value={team} key={index}>
                    {team}
                  </option>
                ))}{" "}
              </select>
            </div>

            {/* Position */}
            <div className="flex items-center">
              <h3 className="text-whiteX mr-4">Position : </h3>
              <input
                name="Position"
                className=" border-b-2 border-slate-200  outline-none text-lg "
                aria-label="Position"
                placeholder="Position"
                onChange={(e) => updateHandler("position", e.target.value)}
                required
                value={member?.position}
              />
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className=" flex items-center flex-col my-4 w-full">
          <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
            Contact details
          </h3>
          <div className="flex justify-around w-full my-4">
            <div className="flex items-center flex-wrap">
              <h3 className="text-whiteX mr-4">Contacts : </h3>
              <div className="flex flex-col justify-start w-full ">
                <input
                  name="Email"
                  className=" border-b-2 border-slate-200  outline-none text-lg "
                  aria-label="Email"
                  placeholder="Email"
                  onChange={(e) =>
                    updateHandler("contacts", e.target.value, "email")
                  }
                  required
                  value={member?.contacts?.email}
                />
                <input
                  name="Instagram"
                  className=" border-b-2 border-slate-200  outline-none text-lg "
                  aria-label="Instagram"
                  placeholder="Instagram"
                  onChange={(e) =>
                    updateHandler("contacts", e.target.value, "instagram")
                  }
                  required
                  value={member?.contacts?.instagram}
                />
                <input
                  name="Twitter"
                  className=" border-b-2 border-slate-200  outline-none text-lg "
                  aria-label="Twitter"
                  placeholder="Twitter"
                  onChange={(e) =>
                    updateHandler("contacts", e.target.value, "twitter")
                  }
                  required
                  value={member?.contacts?.twitter}
                />
                <input
                  name="Facebook"
                  className=" border-b-2 border-slate-200  outline-none text-lg "
                  aria-label="Facebook"
                  placeholder="Facebook"
                  onChange={(e) =>
                    updateHandler("contacts", e.target.value, "facebook")
                  }
                  required
                  value={member?.contacts?.facebook}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="h-20 w-2/3 flex justify-end items-center">
          {label === "Edit Article" ? (
            <>
              <button
                className="bg-primaryRed border-2 w-28 rounded-md text-white  mx-10"
                name="Cancel"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 border-2 w-28 rounded-md text-white"
                name="Edit"
                onClick={handleSubmit}
              >
                Edit
              </button>
            </>
          ) : (
            <button
              className="bg-green-500 border-2 w-28 rounded-md text-white"
              name="Post"
              onClick={handleSubmit}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default MemberForm;
