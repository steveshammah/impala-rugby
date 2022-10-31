import Link from "next/link";
import React from "react";

const SubNav = () => {
  return (
    <div className="sub-header flex justify-between items-center h-10 px-1 bg-whiteX text-blackX">
      <ul className="header-leagues flex justify-start flex-grow">
        <li className="mr-2 font-extralight">Championship</li>
        <li className="mr-2 font-extralight">Kenya Cup</li>
        <li className="mr-2 font-extralight">ESS</li>
        <li className="mr-2 font-extralight">Nationwide</li>
      </ul>

      <ul className="mini-list uppercase font-semibold text-sm flex">
        <li>
          <Link href="/tickets">
            <a>Tickets | </a>
          </Link>
        </li>

        <li>
          <Link href="/my-story">
            <a>Stories |</a>
          </Link>
        </li>
      </ul>

      <ul className="flex items-center ml-2">
        <li>
          <Link href="/impala-tv">
            <button
              className="bg-blackX text-whiteX p-1 rounded-l-md w-24"
              title="Impala TV"
            >
              Impala TV
            </button>
          </Link>
        </li>
        <li>
          <Link href="/auth/login">
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
