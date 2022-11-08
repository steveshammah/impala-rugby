import React from "react";
import { photos } from "../../public/resources/resources";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-48 flex flex-col justify-evenly items-center bg-blackX text-whiteX relative">
      <div className="imageWrapper h-full w-full absolute top-0">
        <img
          src={photos.impalaBlaze.src}
          alt=""
          className="object-cover h-full w-full opacity-40"
        />
      </div>
      <div className="textWrapper z-10 flex flex-col items-center">
        <h2 className="text-3xl p-2 font-bold">#MACHOREDSINCE</h2>
        <p className="sm:text-lg text-md">
          While you're here, you might fancy joining the family and recieve team
          updates and news on the go.
        </p>
        <p className="m-1 sm:text-lg text-sm">
          Sign Up to join the Herd for free
        </p>
        <Link href="/partners-sponsors" className="">
          <button className="w-28  bg-whiteX text-blackX rounded-md hover:text-white hover:bg-primaryRed">
            JOIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
