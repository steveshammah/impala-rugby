import React, { useEffect } from "react";
import Player from "./Player";
import { useTvStore } from "@stores/tvStore";
import { replacer } from "@utils/utils";

interface Props {
  title?: string;
  videoUrl?: string;
}
const VideoContainer = ({ title, videoUrl }: Props) => {
  const { videos, getVideos } = useTvStore();

  useEffect(() => {
    videos?.length < 1 && getVideos();
  }, []);

  return (
    <div className="w-full h-[550px] flex justify-center items-center my-10 ">
      <div className="w-[90%] h-full bg-blackX relative">
        <Player videoUrl={videoUrl ? videoUrl : videos[0]?.id?.videoId} />
        <div className="flex absolute bottom-0 transition-all ease-in-out duration-150 hover:hidden">
          <h2 className="z-10 text-white font-bold sm:text-5xl text-3xl p-1 uppercase bg-blackX bg-opacity-60 w-full text-center">
            {title
              ? title
              : videos.length > 0
              ? replacer(videos[0]?.snippet?.title)
              : ""}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
