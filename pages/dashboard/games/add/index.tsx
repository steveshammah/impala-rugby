import React, { useState } from "react";
import { MdDocumentScanner, MdSportsRugby } from "react-icons/md";
import Shell from "@components/Layouts/DashboardShell";
import EventForm from "@components/MatchCenter/EventForm";
import { useFixtureStore } from "@stores/gamesStore";

const AddEvent = () => {
  const [fixture, setFixture] = useState({});
  const addFixture = useFixtureStore((state) => state.addFixture);

  const links = [
    {
      label: "All",
      url: "/dashboard/games",
      icon: MdSportsRugby,
    },

    {
      label: "Adding Game...",
      url: "#",
      icon: MdDocumentScanner,
    },
  ];
  return (
    <Shell links={links}>
      <EventForm
        label="Add Event"
        submitHandler={addFixture}
        fixture={fixture}
        setFixture={setFixture}
      />
    </Shell>
  );
};

export default AddEvent;
