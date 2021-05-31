import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video, onVideoClick }) => {
  const { snippet } = video;
  return (
    <div className="item video-card" onClick={() => onVideoClick(video)}>
      <img
        alt={video.snippet.title}
        src={snippet.thumbnails.default.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
        <div className="description">{snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoCard;
