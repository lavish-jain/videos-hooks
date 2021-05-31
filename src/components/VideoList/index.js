import React from "react";
import VideoCard from "../VideoCard";

const renderVideos = (videos, onVideoClick) => {
  return videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoClick={onVideoClick}
      />
    );
  });
};

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="ui relaxed divided list">
      {renderVideos(videos, onVideoClick)}
    </div>
  );
};

export default VideoList;
