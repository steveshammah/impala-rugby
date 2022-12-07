import React from "react";
import Player from "./Player";

const VideoContainer = ({ title, videoId }) => {
  return (
    <div className="w-full h-[550px] flex justify-center items-center my-10 bg-blackX relative">
      <Player videoId={videoId} />
      <div className="flex absolute bottom-4">
        <h2 className="p-2 text-center uppercase text-blackX sm:text-5xl text-3xl font-bold transition-all ease-in bg-whiteX bg-opacity-30">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VideoContainer;
