import "./team.scss";
import TeamState from "../../../contexts/team-context";
import Team from "./Team";

import { useEffect, useState } from "react";

const Teams = ({ match }) => {
  // Choose team to be displayed based on last param of URL
  const url = match.params.name;
  const [activeTeam, setActiveTeam] = useState("");
  // console.log("Params", url);
  useEffect(() => {
    setActiveTeam(url);
    return () => {};
  }, [url]);

  return (
    <TeamState>
      <section className='teams container'>
        <Team group={activeTeam} />
      </section>
    </TeamState>
  );
};

export default Teams;
