import { team } from "../public/resources/resources";
import { createContext, FC } from "react";

export interface ITeamContextProps {
  team: any;
}
export const teamContext = createContext({} as ITeamContextProps);

export interface ITeam {
  id: number;
  name: string;
  daysTrained: number;
  daysMissed: number;
  appearances: number;
  phone: string;
  email: string;
  img: string;
  dob: string;
  year: number;
  team: string;
  socials: {
    instagram: string;
    twitter: string;
  }[];
}

export const TeamState: FC = ({ children }) => {
  return (
    <teamContext.Provider value={{ team }}>{children}</teamContext.Provider>
  );
};

export default TeamState;
