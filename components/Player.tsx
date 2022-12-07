import Loader from "./Loader";

const Player = ({ videoId }) => {
  return (
    <>
      {videoId ? (
        <iframe
          className="video-player w-full h-full"
          src={videoId}
          width="640"
          height="480"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Player;
