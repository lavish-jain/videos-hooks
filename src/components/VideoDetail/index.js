import React from "react";

const BASE_URL = "https://www.youtube.com/embed";
const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading</div>;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={`${BASE_URL}/${video.id.videoId}`} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <h5 className="ui description">{video.snippet.channelTitle}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
