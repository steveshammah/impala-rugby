import React from "react";
import Player from "./Player";

const VideoContainer = ({ title, videoUrl }) => {
  return (
    <div className="w-full h-[550px] flex justify-center items-center my-10 bg-blackX relative">
      <Player videoUrl={videoUrl} />
      <div className="flex absolute bottom-0 transition-all ease-in-out duration-150 hover:hidden">
        <h2 className="z-10 text-white font-bold sm:text-5xl text-3xl p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VideoContainer;
