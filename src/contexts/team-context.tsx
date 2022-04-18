import { createContext } from "react";
import { team } from "../../public/resources/resources";

export const teamContext = createContext({});

export const TeamState = (props) => {
  return (
    <teamContext.Provider value={{ team }}>
      {props.children}
    </teamContext.Provider>
  );
};

export default TeamState;
