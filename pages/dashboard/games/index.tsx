import React, { useEffect } from "react";
import {
  MdAddBox,
  MdPeople,
  MdPeopleAlt,
  MdPeopleOutline,
  MdSportsRugby,
} from "react-icons/md";
import Shell from "../../../components/Layouts/DashboardShell";
import AllFixtures from "../../../components/MatchCenter/AllFixtures";
import NextFixture from "../../../components/MatchCenter/NextFixture";
import { useFixtureStore } from "../../../stores/gamesStore";

const GamesPanel = () => {
  const links = [
    {
      label: "All",
      url: "/dashboard/games",
      icon: MdSportsRugby,
    },
    // {
    //   label: "Gazelles",
    //   url: "/dashboard/games?gazelles",
    //   icon: MdPeople,
    // },
    // {
    //   label: "Women",
    //   url: "/dashboard/games?women",
    //   icon: MdPeopleAlt,
    // },
    // {
    //   label: "Boks",
    //   url: "/dashboard/games?boks",
    //   icon: MdPeopleOutline,
    // },
    // {
    //   label: "Swaras",
    //   url: "/dashboard/games?swaras",
    //   icon: MdPeople,
    // },
    // {
    //   label: "Academy",
    //   url: "/dashboard/games",
    //   icon: MdPeopleOutline,
    // },
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
