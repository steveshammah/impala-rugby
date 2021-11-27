import { useContext } from "react";
import { appContext } from "../../../contexts/app-context";
import "./login.scss";
import LoginForm from "./LoginForm";

const Login = () => {
  const { activeUser, setIsAuth } = useContext(appContext);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
