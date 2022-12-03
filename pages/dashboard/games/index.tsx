import React, { useEffect } from "react";
import { MdAddBox, MdSportsRugby } from "react-icons/md";
import Shell from "@components/Layouts/DashboardShell";
import AllFixtures from "@components/MatchCenter/AllFixtures";
import NextFixture from "@components/MatchCenter/NextFixture";
import { useFixtureStore } from "@stores/gamesStore";

const GamesPanel = () => {
  const links = [
    {
      label: "All",
      url: "/dashboard/games",
      icon: MdSportsRugby,
    },
    {
      label: "Add Game",
      url: "/dashboard/games/add",
      icon: MdAddBox,
    },
  ];

  const fixtures = useFixtureStore((state) => state.fixtures);
  const getFixtures = useFixtureStore((state) => state.getFixtures);

  useEffect(() => {
    getFixtures();
  }, []);

  return (
    <Shell links={links}>
      <NextFixture fixture={fixtures[0]} />

      <AllFixtures fixtures={fixtures} />
    </Shell>
  );
};

export default GamesPanel;
