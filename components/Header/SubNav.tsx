import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppStore } from "@stores/appStore";
import { destroyCookie } from "nookies";

const SubNav = () => {
  const [authState, setAuthState] = useState(false);
  const isAuth = useAppStore((state) => state.user.isAuth);
  const setIsAuth = useAppStore((state) => state.setIsAuth);

  useEffect(() => {
    setAuthState(isAuth);

    return () => {};
  }, [isAuth]);

  return (
    <div className="sub-header flex sm:flex-row flex-col-reverse justify-end items-center sm:h-10 h-10 px-1 bg-whiteX text-blackX">
      {/* TODO */}
      {/* <ul className="header-leagues flex justify-start flex-grow">
        <li className="mr-2 font-extralight sm:text-base text-sm">Kenya Cup</li>
        <li className="mr-2 font-extralight sm:text-base text-sm">
          Women's League
        </li>
        <li className="mr-2 font-extralight sm:text-base text-sm">
          Championship
        </li>
        <li className="mr-2 font-extralight sm:text-base text-sm">ESS</li>
        <li className="mr-2 font-extralight sm:text-base text-sm">
          Nationwide
        </li>
      </ul> */}

      <ul className="uppercase font-semibold text-sm sm:w-auto w-full flex items-center justify-between sm:mt-0 mt-1">
        <li>
          <Link href="#tickets">Tickets |</Link>
        </li>

        <li>
          <Link href="#my-story">Stories |</Link>
        </li>

        <li>
          <Link href="/tv">
            <button
              className="bg-blackX text-whiteX p-1 rounded-l-md w-24"
              title="Impala TV"
            >
              Impala TV
            </button>
          </Link>
        </li>
        <li>
          {authState ? (
            <Link href="/auth">
              <button
                className="bg-green-600 p-1 text-white rounded-r-md w-24"
                title="Sign In"
                onClick={() => destroyCookie(null, "authEmail")}
              >
                Sign Out
              </button>
            </Link>
          ) : (
            <Link href="/auth">
              <button
                className="bg-primaryRed p-1 text-white rounded-r-md w-24"
                title="Sign In"
              >
                Sign In
              </button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
