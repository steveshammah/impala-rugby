import "./groups.scss";
import { AddCircle } from "@material-ui/icons";
import { videos, logos } from "../../public/resources/resources";

const VideoCard = () => {
  return (
    <>
      {videos.map((video) => (
        <div className="group">
          {video.count && <span className="active"></span>}

          <div className="image">
            {video.id === 0 ? (
              <AddCircle className="group-logo" />
            ) : (
              <img
                src={video.img ? video.img : logos.impala_logo_2}
                alt="GROUP LOGO"
                className="group-logo"
              />
            )}
          </div>

          <div className="group-text">
            <strong>{video.name}</strong>
            {video.count && <small>{video.count} Videos</small>}
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoCard;
