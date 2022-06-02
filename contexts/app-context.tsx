import { createContext, FC } from "react";

interface IActiveUser {
  isAuth: boolean;
  username: string;
}
export interface IAppContextProps {
  activeUser: IActiveUser;
}
export const appContext = createContext({} as IAppContextProps);

const AppState: FC = ({ children }) => {
  const initialState = {
    activeUser: { isAuth: false, username: "" },
  };
  // const [isAuth, setIsAuth] = useState(initialState.activeUser.isAuth);
  return (
    <appContext.Provider value={{ activeUser: initialState.activeUser }}>
      {children}
    </appContext.Provider>
  );
};

export default AppState;
