import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useRef, Dispatch, SetStateAction } from "react";
import MultiInput from "./MultiInput";

interface Props {
  label: string;
  fixture: any;
  setFixture: Dispatch<SetStateAction<any>>;
  submitHandler: any;
}

const EventForm = ({ label, submitHandler, fixture, setFixture }: Props) => {
  const eventForm = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.name;
    if (option === "Save") {
      submitHandler({
        ...fixture,

        created: Timestamp.now(),
      });
      eventForm && eventForm?.current?.reset();
      setFixture({});
      return;
    } else if (option === "Edit") {
      submitHandler(fixture.id, { ...fixture, lastEdited: Timestamp.now() });
      router.back();
    } else {
      submitHandler({
        ...fixture,

        created: Timestamp.now(),
      });
      eventForm && eventForm?.current?.reset();
      setFixture({});
      return;
    }
  };

  const updateHandler = (
    field: string,
    value?: any,
    option?: string,
    name?: string
  ) => {
    if (field.includes("Scores") || field.includes("TeamList")) {
      fixture[field] = {
        ...fixture[field],
        [name]: value,
      };
      // fixture[field] = { ...fixture[field], temp };
      return setFixture({
        ...fixture,
      });
    } else if (field === "kickOff") {
      const kickOff = Timestamp.fromMillis(Date.parse(String(new Date(value))));
      setFixture({ ...fixture, [field]: kickOff });
      return;
    } else {
      return setFixture({ ...fixture, [field]: value });
    }
  };
  const events = [
    "kenya cup",
    "championship",
    "womens league",
    "floodies",
    "nationwide",
    "sevens circuit",
    "training",
    "friendly",
  ];
  const teams = [
    "gazelles",
    "women",
    "swaras",
    "age-grade",
    "management",
    "media",
    "tech",
  ];

  const scores = [
    {
      label: "halftime",
      name: "ht",
      placeholder: "HT",
    },
    {
      label: "fulltime",
      name: "ft",
      placeholder: "FT",
    },
    {
      label: "tries",
      name: "tries",
      placeholder: "Tries",
    },
    {
      label: "conversion",
      name: "con",
      placeholder: "Conversions",
    },
    {
      label: "penalties",
      name: "pen",
      placeholder: "Penalties",
    },
  ];

  const teamList = [
    {
      label: "Loose Head",
      name: "1",
      placeholder: "Loose Head",
    },
    {
      label: "Hooker",
      name: "2",
      placeholder: "Hooker",
    },
    {
      label: "Tight Head",
      name: "3",
      placeholder: "Tight Head",
    },
    {
      label: "Loosehead Lock",
      name: "4",
      placeholder: "Loose Head Lock",
    },
    {
      label: "Tighthead Lock",
      name: "5",
      placeholder: "Tight Head Lock",
    },
    {
      label: "Blindside Flanker",
      name: "6",
      placeholder: "Blindside Flanker",
    },
    {
      label: "Openside Flanker",
      name: "7",
      placeholder: "Openside Flanker",
    },
    {
      label: "8th Man",
      name: "8",
      placeholder: "8th Man",
    },
    {
      label: "Scrum Half",
      name: "9",
      placeholder: "Scrum Half",
    },
    {
      label: "Fly Half",
      name: "10",
      placeholder: "Fly Half",
    },
    {
      label: "Left Wing",
      name: "11",
      placeholder: "Blind Wing",
    },
    {
      label: "Inside Center",
      name: "12",
      placeholder: "Inside Center",
    },
    {
      label: "Outside Center",
      name: "13",
      placeholder: "Outside Center",
    },
    {
      label: "Right Wing",
      name: "14",
      placeholder: "Right Wing",
    },
    {
      label: "Fullback",
      name: "15",
      placeholder: "Fullback",
    },
    {
      label: "Substitute",
      name: "16",
      placeholder: "Substitute - 16",
    },
    {
      label: "Substitute",
      name: "17",
      placeholder: "Substitute - 17",
    },
    {
      label: "Substitute",
      name: "18",
      placeholder: "Substitute - 18",
    },
    {
      label: "Substitute",
      name: "19",
      placeholder: "Substitute - 19",
    },
    {
      label: "Substitute",
      name: "20",
      placeholder: "Substitute - 20",
    },
    {
      label: "Substitute",
      name: "21",
      placeholder: "Substitute - 21",
    },
    {
      label: "Substitute",
      name: "22",
      placeholder: "Substitute - 22",
    },
    {
      label: "Substitute",
      name: "23",
      placeholder: "Substitute - 23",
    },
  ];

  return (
    <form
      className="h-full flex flex-col justify-between w-full"
      ref={eventForm}
    >
      <h2 className="text-2xl font-bold w-full text-left">{label}</h2>

      {/* Teams */}
      <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
        Vs
      </h3>
      <div className="flex  justify-around p-2 w-full ">
        <select
          name="Team"
          className="p-1 border-b-2 border-slate-200  outline-none text-xl capitalize "
          aria-label="Team"
          placeholder="Team"
          onChange={(e) => updateHandler("team", e.target.value.toLowerCase())}
          required
          value={fixture?.team}
        >
          <option value="gazelles">Select Team</option>
          {teams.map((team, index) => (
            <option value={team} key={index} className="capitalize">
              {team}
            </option>
          ))}
        </select>
        <input
          name="Opponent"
          className="p-1 border-b-2 border-slate-200  outline-none text-xl capitalize"
          aria-label="Opponent"
          placeholder="Opponent"
          onChange={(e) =>
            updateHandler("opponent", e.target.value.toLowerCase())
          }
          required
          value={fixture?.opponent}
        />
      </div>
      {/* Competititon */}
      <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
        Competition
      </h3>
      <div className="flex  justify-around p-2 w-full ">
        <select
          name="competition"
          className="p-1 border-b-2 border-slate-200  outline-none text-xl capitalize "
          aria-label="competition"
          placeholder="compettion"
          onChange={(e) =>
            updateHandler("competition", e.target.value.toLowerCase())
          }
          required
          value={fixture?.competition}
        >
          <option value="gazelles">Select Event</option>

          {events.map((team, index) => (
            <option value={team} key={index} className="capitalize">
              {team}
            </option>
          ))}
        </select>
        <input
          name="Venue"
          className="p-1 border-b-2 border-slate-200  outline-none text-xl capitalize"
          aria-label="Venue"
          placeholder="Venue"
          onChange={(e) => updateHandler("venue", e.target.value.toLowerCase())}
          required
          value={fixture?.venue}
        />
      </div>

      {/* Match Details */}
      <div className=" flex items-center flex-col my-4  w-full p-4">
        <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
          Match Details
        </h3>
        <div className="flex justify-around w-full my-4">
          {/*Kick Off */}
          <div className="flex items-center">
            <h3 className="text-blackX mr-4">Kick Off:</h3>
            <input
              name="kickOff"
              className=" border-b-2 border-slate-200  outline-none text-lg "
              aria-label="kickOff"
              placeholder="kickOff"
              onChange={(e) => updateHandler("kickOff", e.target.value)}
              required
              type={"datetime-local"}
              // value={
              //   fixture?.kickOff &&
              //   formatDate(fixture?.kickOff?.seconds, "yyy-MM-dd")
              // }
            />
          </div>

          {/* Home */}
          <div className="flex items-center">
            <h3 className="text-blackX mr-4">Home: </h3>
            <input
              name="home"
              className=" border-b-2 border-slate-200  outline-none text-lg "
              aria-label="kickOff"
              placeholder="home"
              onChange={(e) => updateHandler("home", e.target.checked)}
              required
              type={"radio"}
              defaultChecked
            />

            <h3 className="text-blackX mx-4">Away: </h3>
            <input
              name="home"
              className=" border-b-2 border-slate-200  outline-none text-lg "
              aria-label="away"
              placeholder="away"
              onChange={(e) =>
                updateHandler("home", e.target.checked ? false : true)
              }
              required
              type={"radio"}
            />
          </div>
        </div>
      </div>

      <div className=" flex items-center flex-col my-4 w-full">
        <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
          Event meta-details
        </h3>
        <div className="flex justify-around w-full my-4">
          {/* Status */}
          <div className="flex items-center">
            <h3 className="text-whiteX mr-4">Event Status :</h3>
            <h3 className="text-blackX mr-4">Played </h3>
            <div className="flex items-center">
              <input
                name="played"
                className=" border-b-2 border-slate-200  outline-none text-lg "
                aria-label="played"
                placeholder="played"
                onChange={(e) => updateHandler("played", e.target.checked)}
                required
                type={"radio"}
              />

              <h3 className="text-blackX mx-4">Not Played: </h3>
              <input
                name="played"
                className=" border-b-2 border-slate-200  outline-none text-lg "
                aria-label="not played"
                placeholder="not played"
                onChange={(e) =>
                  updateHandler("played", e.target.checked ? false : true)
                }
                required
                type={"radio"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 w-full justify-center items-center my-4">
        {/* Statisctics */}
        <div className=" flex items-center flex-col my-4 w-full">
          <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
            Statistics
          </h3>
          <div className="flex justify-around w-full my-4">
            <div className="flex items-center flex-wrap">
              <h3 className="text-whiteX mr-4">Scores : </h3>
              <div className="flex">
                <div className="flex flex-col justify-start w-full ">
                  <h4>Impala</h4>
                  <MultiInput
                    entry={"impalaScores"}
                    fields={scores}
                    fixture={fixture?.impalaScores}
                    updateHandler={updateHandler}
                  />
                </div>
                <div className="flex flex-col justify-start w-full ">
                  <h4>Opponent</h4>
                  <MultiInput
                    team={fixture?.opponent}
                    entry={"opponentScores"}
                    fields={scores}
                    fixture={fixture?.opponent}
                    updateHandler={updateHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Lists */}
        <div className=" flex items-center flex-col my-4 w-full">
          <h3 className="text-md text-blackX font-bold italic text-left w-4/5">
            Team Lists
          </h3>
          <div className="flex justify-around w-full my-4">
            <div className="flex items-center flex-wrap">
              <h3 className="text-whiteX mr-4">Squads : </h3>
              <div className="flex">
                <div className="flex flex-col justify-start w-full ">
                  <h4>Impala</h4>
                  <MultiInput
                    entry={"impalaTeamList"}
                    fields={teamList}
                    team="impala"
                    fixture={fixture?.teamList}
                    updateHandler={updateHandler}
                  />
                </div>
                <div className="flex flex-col justify-start w-full ">
                  <h4>Opponent</h4>
                  <MultiInput
                    entry={"opponentTeamList"}
                    fields={teamList}
                    team="opponent"
                    fixture={fixture?.opponentList}
                    updateHandler={updateHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="h-20 w-2/3 flex justify-end items-center">
          {label === "Edit Fixture" ? (
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
export default EventForm;
