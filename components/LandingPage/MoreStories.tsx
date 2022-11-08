import React from "react";
import { photos } from "../../public/resources/resources";
import Link from "next/link";

const MoreStories = () => {
  return (
    <div className="h-max p-2">
      <h2 className="text-3xl font-bold text-primaryRed">Editor's Pick</h2>

      <div className="flex flex-wrap relative h-full justify-center">
        <Link href="/stories/website-built-by-shammah">
          <div className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl">
            <img
              src={photos.coding.src}
              alt=""
              className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
            />
            <h3 className="z-10 absolute top-3/4 text-whiteX font-bold sm:text-2xl text-lg p-1 uppercase">
              Website Built By Shammah
            </h3>
          </div>
        </Link>

        <Link href="/stories">
          <div className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl">
            <img
              src={photos.oscarOsir.src}
              alt=""
              className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
            />
            <h3 className="z-10 absolute top-3/4 text-whiteX font-bold sm:text-2xl text-lg p-1 uppercase">
              Osir Appointed Head Coach
            </h3>
          </div>
        </Link>

        <Link href="/stories">
          <div className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl">
            <img
              src={photos.teamPhoto2.src}
              alt=""
              className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
            />
            <h3 className="z-10 absolute top-3/4 text-whiteX font-bold sm:text-2xl text-lg p-1 uppercase">
              Tusker na Rugby
            </h3>
          </div>
        </Link>

        <Link href="/stories/13">
          <div className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl">
            <img
              src={photos.solido.src}
              alt=""
              className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
            />
            <h3 className="z-10 absolute top-3/4 text-whiteX font-bold sm:text-2xl text-lg p-1 uppercase">
              Transfer News
            </h3>
          </div>
        </Link>

        <Link href="/stories">
          <div className="relative h-52 w-96 m-2 rounded-md shadow-md cursor-pointer overflow-hidden hover:shadow-2xl">
            <img
              src={photos.rilSponsorPhoto.src}
              alt=""
              className="transition-all ease-in duration-300 object-cover rounded-sm w-full h-full absolute top-0 hover:scale-110"
            />
            <h3 className="z-10 absolute top-3/4 text-whiteX font-bold sm:text-2xl text-lg p-1 uppercase">
              Where is Resolution Now
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoreStories;
