import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDocumentScanner, MdSportsRugby } from "react-icons/md";
import Shell from "../../../../components/Layouts/DashboardShell";
import EventForm from "../../../../components/MatchCenter/EventForm";
import { IFB, IFixture, useFixtureStore } from "../../../../stores/gamesStore";

const AddEvent = () => {
  const router = useRouter();
  const fixtureId = String(router?.query?.id);
  const [toEditFixture, setToEditFixture] = useState<IFixture | IFB>();
  const fixture = useFixtureStore((state) => state.fixture);
  const getFixture = useFixtureStore((state) => state.getFixture);
  const editFixture = useFixtureStore((state) => state.editFixture);

  useEffect(() => {
    getFixture(fixtureId);
    setToEditFixture(fixture);
    return () => {
      setToEditFixture(undefined);
    };
  }, [fixture?.opponent]);

  const links = [
    {
      label: "All",
      url: "/dashboard/games",
      icon: MdSportsRugby,
    },

    {
      label: "Editing Fixture...",
      url: "#",
      icon: MdDocumentScanner,
    },
  ];
  return (
    <Shell links={links}>
      <EventForm
        label="Edit Fixture"
        submitHandler={editFixture}
        fixture={toEditFixture}
        setFixture={setToEditFixture}
      />
    </Shell>
  );
};

export default AddEvent;
