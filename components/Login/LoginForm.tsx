import { logos } from "@public/resources/resources";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { eventLogger } from "@utils/utils";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const LoginForm = ({ magicWord, sayMagicWord, onSubmit, error }) => {
  const [show, setShow] = useState(false);
  const loginForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    eventLogger({
      event: "Login",
      username: magicWord.key,
    });

    onSubmit();
    loginForm.current.reset();
  };

  return (
    <div className="w-full  sm:p-10 p-5 h-full  flex rounded-md justify-center  items-center lg:min-h-[calc(100vh-300px)]">
      <div className="shadow-lg  flex flex-col lg:w-1/2 w-full items-center justify-center rounded-md">
        <div className="flex justify-between w-full px-8 items-center bg-primaryRed rounded-t-md h-[60px]">
          <img
            src={logos.impalaLogo.src}
            alt="Impala Logo"
            className=" w-16 h-16 object-contain"
          />
          <h2 className="text-xl font-bold text-whiteX">Log In</h2>
        </div>
        <form
          ref={loginForm}
          className="flex flex-col  items-center justify-evenly flex-1  bg-white w-full rounded-b-md pb-10"
        >
          <div className="sm:w-1/2 w-5/6 flex flex-col items-start justify-center my-6">
            <h4 className="font-black mb-1">Username</h4>
            <div className="flex items-center w-full">
              <div className="bg-whiteX text-black h-9 w-9 rounded-l-md flex justify-center items-center">
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                required
                className="border-b-[1px] border-slate-200 outline-none h-9 w-[100%] pl-3"
                onChange={(e) =>
                  sayMagicWord({ ...magicWord, key: e.target.value })
                }
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-5/6 flex flex-col items-start justify-center my-6">
            <h4 className="font-black mb-1">Password</h4>{" "}
            <div className="flex items-center w-full">
              <div
                className="bg-whiteX text-black h-9 w-9 rounded-l-md flex justify-center items-center cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </div>
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="border-b-[1px] border-slate-200 outline-none h-9 w-[100%] pl-3"
                onChange={(e) =>
                  sayMagicWord({ ...magicWord, pass: e.target.value })
                }
              />
            </div>
          </div>

          {error && (
            <span className="text-primaryRed">Invalid Credentials!!</span>
          )}
          <div className="flex my-6 items-center sm:w-1/2 w-11/12 justify-evenly">
            <button
              className="bg-primaryRed text-white w-40 rounded-md h-9"
              onClick={handleSubmit}
            >
              Log in
            </button>

            <i className="font-black mx-4">Or</i>

            <button
              className="bg-blackX text-whiteX w-40 rounded-md cursor-not-allowed h-9"
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
            <small>
              <Link href="/">
                <span className="text-primaryRed font-bold cursor-pointer">
                  Sign Up
                </span>
              </Link>{" "}
              for an account
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
