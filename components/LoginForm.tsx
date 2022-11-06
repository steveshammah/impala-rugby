import { logos } from "../public/resources/resources";
import { useRef } from "react";

const LoginForm = () => {
  const loginForm = useRef(null);

  return (
    <div className="login-container">
      <div className="img-container">
        <img src={logos.impalaLogo.src} alt="" />
      </div>
      <div className="form-container">
        <div className="head-container">
          <h2>Log In</h2> <span>{"Username"}</span>
        </div>
        <form ref={loginForm}>
          <span>
            <h4>Username</h4>
            <input type="text" placeholder="Enter your username" required />
          </span>
          <span>
            <h4>Password</h4>{" "}
            <input type="password" placeholder="Enter your password" required />
          </span>
          <span>
            <button className="login">Log in</button>

            <i>Or</i>

            <button
              className="google-login"
              disabled
              title="Feature currently unavailable"
            >
              Continue with Google
            </button>
          </span>

          <p>
            <a href="/">
              {" "}
              <small>Can't log in? </small>
            </a>{" "}
            |{" "}
            <a href="/">
              <small>Sign Up for an account</small>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
