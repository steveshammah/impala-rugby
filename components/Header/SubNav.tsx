import Link from "next/link";
import React from "react";

const SubNav = () => {
  return (
    <div className="sub-header flex sm:flex-row flex-col-reverse justify-between items-center sm:h-10 h-14 px-1 bg-whiteX text-blackX">
      <ul className="header-leagues flex justify-start flex-grow">
        <li className="mr-2 font-extralight sm:text-base text-sm">Kenya Cup</li>
        <li className="mr-2 font-extralight sm:text-base text-sm">
          Championship
        </li>
        <li className="mr-2 font-extralight sm:text-base text-sm">ESS</li>
        <li className="mr-2 font-extralight sm:text-base text-sm">
          Nationwide
        </li>
      </ul>

      <ul className="uppercase font-semibold text-sm sm:w-auto w-full flex items-center justify-between sm:mt-0 mt-1">
        <li>
          <Link href="?tickets">
            <a>Tickets | </a>
          </Link>
        </li>

        <li>
          <Link href="?my-story">
            <a>Stories |</a>
          </Link>
        </li>

        <li>
          <Link href="?impala-tv">
            <button
              className="bg-blackX text-whiteX p-1 rounded-l-md w-24"
              title="Impala TV"
            >
              Impala TV
            </button>
          </Link>
        </li>
        <li>
          <Link href="/auth">
            <button
              className="bg-primaryRed p-1 text-white rounded-r-md w-24"
              title="Sign In"
            >
              Sign In
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
