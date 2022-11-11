import Link from "next/link";
import React, { useState } from "react";
import { logos } from "../public/resources/resources";
import { useFixtureStore } from "../stores/gamesStore";
import { formatDate } from "../utils";

const Carousel = () => {
  const fixtures = useFixtureStore((state) => state.fixtures);

  const [slideIndex, setIndex] = useState(1);
  const items = [1, 2, 3, 4, 5, 6];

  showSlide(slideIndex);

  function moveSlide(moveStep) {
    setIndex(slideIndex + moveStep);
    showSlide(slideIndex + moveStep);
  }

  function showSlide(n) {
    if (n > items.length) {
      setIndex(1);
    }
    if (n < 1) {
      setIndex(items.length);
    }
  }
  return (
    <div className="w-full">
      <div className="relative w-full mx-auto flex ">
        {fixtures.map((match, index) => (
          <div
            className={`${
              "flex"
              //   items[slideIndex - 1] === index ? "flex" : "hidden "
            } slide relative duration-700 ease-in-out w-80 h-80 flex-col shadow-md hover:shadow-xl m-4 rounded-md p-2`}
            key={index}
          >
            <div className="flex-1 flex flex-col items-center w-full">
              <h4 className="uppercase">{match.competition}</h4>
              {formatDate(match?.kickOff.seconds * 1000, "long")}
              {/* <div className="flex">   */}
              <span className="capitalize">
                {formatDate(match?.kickOff.seconds * 1000, "time")}{" "}
              </span>

              <span className="capitalize italic">{match.venue}</span>
              {/* </div> */}
            </div>
            {!match?.home ? (
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={match?.logo?.src}
                    alt="Logo"
                    className="h-14 object-contain rounded-full object-center"
                  />
                  <h3 className="font-semibold text-sm">{match.opponent}</h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                    {match.scores?.impala.ft}-{match.scores?.opponent.ft}
                  </span>
                ) : (
                  <span className="bg-blackX p-2  rounded-md text-whiteX">
                    {formatDate(match?.kickOff.seconds * 1000, "time")}
                  </span>
                )}
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Impala Logo"
                    className="h-14 object-contain rounded-full object-center"
                  />
                  <h3 className="font-semibold text-sm">Impala</h3>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-between w-full">
                <div className="flex flex-1 flex-col justify-between items-center">
                  <img
                    src={logos.impalaLogo.src}
                    alt="Impala Logo"
                    className="h-14 w-16 object-contain rounded-full object-center mb-1"
                  />
                  <h3 className="font-semibold text-sm w-18">Impala</h3>
                </div>
                {match.played ? (
                  <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                    {match.scores?.impala.ft}-{match.scores?.opponent.ft}
                  </span>
                ) : (
                  <span className="bg-blackX p-2  rounded-md text-whiteX">
                    {formatDate(match?.kickOff.seconds * 1000, "time")}
                  </span>
                )}
                <div className="flex flex-1 flex-col">
                  <img
                    src={match?.logo?.src}
                    alt="Logo"
                    className="h-14 object-contain rounded-full"
                  />
                  <h3 className="font-semibold text-sm capitalize w-18 text-ellipsis">
                    {match.opponent}
                  </h3>
                </div>
              </div>
            )}
            <div className="teams flex flex-1 items-center  justify-center flex-col">
              {
                <Link href={`/fixtures/${match.uId}?team=${match.team}`}>
                  <button className="border border-gray-400 font-thin p-2 rounded-full">
                    Match Review
                  </button>
                </Link>
              }
            </div>
          </div>
        ))}

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => moveSlide(-1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => moveSlide(-1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
