import React from "react";
import { photos } from "@public/resources/resources";
import Link from "next/link";

const MoreStories = () => {
  return (
    <div className="h-max p-2 py-5">
      <h2 className="text-3xl font-bold text-primaryRed mb-4 px-2">
        Editor's Pick
      </h2>

      <div className="flex flex-wrap relative h-full justify-center">
        <Link
          href="/stories"
          className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl"
        >
          <img
            src={photos.billGithinji.src}
            alt=""
            className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
          />
          <h3 className="z-10 absolute bottom-0 text-white font-bold sm:text-2xl text-lg p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
            Impala Appoint New Head Coach
          </h3>
        </Link>
        <Link
          href="/stories/it's-a-wrap-for-floodies-2022"
          className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl"
        >
          <img
            src={photos.floodies2022.src}
            alt=""
            className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
          />
          <h3 className="z-10 absolute bottom-0 text-white font-bold sm:text-2xl text-lg p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
            IT'S A WRAP FOR FLOODIES
          </h3>
        </Link>

        <Link
          href="/stories"
          className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl"
        >
          <img
            src={photos.teamPhoto2.src}
            alt=""
            className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
          />
          <h3 className="z-10 absolute bottom-0 text-white font-bold sm:text-2xl text-lg p-1 uppercase bg-blackX bg-opacity-60">
            Impala To Compete In the Championship League
          </h3>
        </Link>

        <Link
          href="/stories"
          className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl"
        >
          <img
            src={photos.paul.src}
            alt=""
            className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
          />
          <h3 className="z-10 absolute bottom-0 text-white font-bold sm:text-2xl text-lg p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
            Transfer News
          </h3>
        </Link>

        <Link
          href="/stories"
          className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl"
        >
          <img
            src={photos.rilSponsorPhoto.src}
            alt=""
            className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
          />
          <h3 className="z-10 absolute bottom-0 text-white font-bold sm:text-2xl text-lg p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
            Impala Sponsorship
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default MoreStories;
