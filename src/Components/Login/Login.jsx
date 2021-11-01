import { useContext, useRef } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import "./login.scss";
import logo from "../../Resources/impala-logo.png";

export const Login = () => {
  const { setLogin, username, setUsername } = useContext(LoginContext);
  const loginForm = useRef();

  const onChange = (e) => {
    const typedName = e.target.value;
    if (typedName === "admin") {
      setUsername(typedName);
    }
  };

  const handleClick = () => {
    if (username) {
      setLogin(true);
    }
    loginForm.current.reset();
  };

  return (
    <div className='login-container'>
      <div className='img-container'>
        <img src={logo} alt='' />
      </div>
      <div className='form-container'>
        <div className='head-container'>
          <h2>Log In</h2> <span>{username}</span>
        </div>
        <form ref={loginForm}>
          <span>
            <h4>Username</h4>
            <input
              type='text'
              placeholder='Enter your username'
              onChange={onChange}
              required
            />
          </span>
          <span>
            <h4>Password</h4>{" "}
            <input type='password' placeholder='Enter your password' required />
          </span>
          <span>
            <button onClick={handleClick} className='login'>
              Log in
            </button>

            <i>Or</i>

            <button
              className='google-login'
              disabled
              title='Feature currently unavailable'>
              Continue with Google
            </button>
          </span>

          <p>
            <a href='/'>
              {" "}
              <small>Can't log in? </small>
            </a>{" "}
            |{" "}
            <a href='/'>
              <small>Sign Up for an account</small>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
