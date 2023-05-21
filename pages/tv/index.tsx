import Loader from "@components/Loader";
import Player from "@components/Player";
import { photos } from "@public/resources/resources";
import { useTvStore } from "@stores/tvStore";
import { replacer } from "@utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const index = () => {
  const [activeVideo, setActiveVideo] = useState();
  const videos = useTvStore((state) => state.videos);
  const getVideos = useTvStore((state) => state.getVideos);

  useEffect(() => {
    videos?.length < 1 && getVideos();
  }, []);

  return (
    <div className="text-blackX flex flex-col items-center justify-around relative">
      <div className="py-2 to-blackX lg:w-10/12 w-11/12">
        <div className="flex justify-between h-[320px] bg-blackX relative">
          <div className="flex flex-col text-whiteX items-center p-4 w-full h-full justify-center absolute">
            <h2 className="font-bold lg:text-4xl text-lg my-2">
              Welcome to Impala Tv
            </h2>
            <h2>For more videos</h2>
            <Link
              href="https://www.youtube.com/@takeoverke"
              target="_blank"
              className="bg-primaryRed flex items-center justify-center rounded-md text-white lg:w-[150px] w-[120px] h-8"
            >
              <BsYoutube className="mr-2" />
              <span>Subscribe</span>
            </Link>
          </div>
          <div className="flex relative h-full w-[100%] opacity-25">
            <Image src={photos.teamPhoto_black.src} alt="team-photo" fill />
          </div>
        </div>

        <div className="flex flex-col my-6">
          <h2 className="text-primaryRed font-semibold mb-4">Latest Videos</h2>

          {videos?.length > 0 ? (
            <div className="player-container">
              {/* <div className="flex w-full flex-wrap justify-around"> */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8">
                {videos.map((video, index) => (
                  <div
                    className="flex flex-col shadow-md  bg-blackX h-[240px] rounded-md mb-6"
                    key={index}
                  >
                    <div
                      className="h-[70%] w-[100%] relative rounded-t-md"
                      onClick={() => setActiveVideo(video.id.videoId)}
                    >
                      <Image
                        src={video.snippet.thumbnails.high.url}
                        alt="Video Thumbnail"
                        fill
                        className="rounded-t-md w-[100%]"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full px-2 bg-white rounded-b-md h-[30%]">
                      <h2 className="text-blackX font-bold uppercase text-md">
                        {replacer(video.snippet.title)}
                      </h2>
                      <span
                        className={`text-whiteX text-sm ${
                          index < 3 ? "block" : "hidden"
                        }`}
                      >
                        Latest
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      {activeVideo && (
        <div className="fixed top-[60px] flex justify-center items-center h-[calc(100vh-60px)] w-full bg-blackX bg-opacity-90">
          <MdClose
            onClick={() => setActiveVideo(undefined)}
            className="text-2xl text-primaryRed absolute top-20 right-10 hover:bg-primaryRed hover:text-white hover:rounded-md "
          />
          <div className="flex justify-center items-center h-[500px] w-[90%]">
            <Player videoUrl={activeVideo} />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default index;
