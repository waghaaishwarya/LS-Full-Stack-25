import { useState, useEffect } from "react";
import VideoCard from "../components/videocard";

const WatchLater = () => {
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("watchLater")) || [];
    setSavedVideos(stored);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {savedVideos.length > 0 ? (
        savedVideos.map(video => <VideoCard key={video.id} video={video} />)
      ) : (
        <p>No videos in Watch Later</p>
      )}
    </div>
  );
};

export default WatchLater;
