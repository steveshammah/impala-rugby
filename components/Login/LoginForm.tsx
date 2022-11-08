import { logos } from "../../public/resources/resources";
import React, { useRef } from "react";
import Link from "next/link";

const LoginForm = ({ magicWord, sayMagicWord, onSubmit, error }) => {
  const loginForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    loginForm.current.reset();
  };

  return (
    <div className="w-full  sm:p-10 p-5 h-full  flex rounded-md justify-center  items-center">
      <div className="shadow-lg  flex flex-col sm:w-1/2 w-full items-center justify-center bg-blackX rounded-md">
        <div className="flex justify-between w-full px-2 items-center bg-primaryRed rounded-t-md">
          <img
            src={logos.impalaLogo.src}
            alt="Impala Logo"
            className=" w-10 h-10 object-contain"
          />
          <h2 className="text-xl font-bold text-whiteX">Log In</h2>
        </div>
        <form
          ref={loginForm}
          className="flex flex-col  items-center justify-evenly flex-1  bg-white w-full rounded-b-md"
        >
          <div className="sm:w-1/2 w-5/6 flex flex-col items-start justify-center my-6">
            <h4 className="font-black">Username</h4>
            <input
              type="text"
              placeholder="Enter your username"
              required
              className="border-b-2 border-slate-100 w-full"
              onChange={(e) =>
                sayMagicWord({ ...magicWord, key: e.target.value })
              }
            />
          </div>
          <div className="sm:w-1/2 w-5/6 flex flex-col items-start justify-center my-6">
            <h4 className="font-black">Password</h4>{" "}
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="border-b-2 border-slate-100 w-full"
              onChange={(e) =>
                sayMagicWord({ ...magicWord, pass: e.target.value })
              }
            />
          </div>

          {error && (
            <span className="text-primaryRed">Incorrect Credentials</span>
          )}
          <div className="flex my-6 items-center sm:w-1/2 w-11/12 justify-evenly">
            <button
              className="bg-primaryRed text-white w-40 rounded-md"
              onClick={handleSubmit}
            >
              Log in
            </button>

            <i className="font-black">Or</i>

            <button
              className="bg-blackX text-whiteX w-40 rounded-md cursor-not-allowed"
              disabled
              title="Feature currently unavailable"
            >
              Google Login
            </button>
          </div>

          <div className="italic text-blackX">
            <Link href="/">
              <small>Can't log in? </small>
            </Link>
            |{" "}
            <Link href="/">
              <small>Sign Up for an account</small>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
