import { createContext, useState } from "react";

const AppState = (props) => {
  const initialState = {
    activeUser: { isAuth: false, username: "" },
  };
  const [isAuth, setIsAuth] = useState(initialState.activeUser.isAuth);
  return (
    <appContext.Provider
      value={{ activeUser: initialState.activeUser, setIsAuth }}>
      {props.children}
    </appContext.Provider>
  );
};
export const appContext = createContext({});

export default AppState;
