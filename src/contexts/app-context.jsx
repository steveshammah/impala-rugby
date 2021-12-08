import { createContext } from "react";

export const appContext = createContext({});

const AppState = (props) => {
  const initialState = {
    activeUser: { isAuth: false, username: "" },
  };
  // const [isAuth, setIsAuth] = useState(initialState.activeUser.isAuth);
  return (
    <appContext.Provider value={{ activeUser: initialState.activeUser }}>
      {props.children}
    </appContext.Provider>
  );
};

export default AppState;
