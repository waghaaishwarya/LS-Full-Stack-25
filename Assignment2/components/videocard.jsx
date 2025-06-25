import { useState, useEffect } from "react";

const VideoCard = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const likedList = JSON.parse(sessionStorage.getItem("liked")) || [];
    const savedList = JSON.parse(sessionStorage.getItem("watchLater")) || [];
    setLiked(likedList.includes(video.id));
    setSaved(savedList.some(v => v.id === video.id));
  }, [video.id]);

  const toggleLike = () => {
    let likedList = JSON.parse(sessionStorage.getItem("liked")) || [];
    likedList = liked
      ? likedList.filter(id => id !== video.id)
      : [...likedList, video.id];
    sessionStorage.setItem("liked", JSON.stringify(likedList));
    setLiked(!liked);
  };

  const toggleWatchLater = () => {
    let savedList = JSON.parse(sessionStorage.getItem("watchLater")) || [];
    const exists = savedList.some(v => v.id === video.id);
    savedList = exists
      ? savedList.filter(v => v.id !== video.id)
      : [...savedList, video];
    sessionStorage.setItem("watchLater", JSON.stringify(savedList));
    setSaved(!exists);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={video.thumbnail} alt={video.title} className="w-full" />
      <div className="p-3">
        <h3 className="font-semibold text-sm md:text-md mb-1">{video.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{video.channel}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{video.views} • {video.time}</p>
        <div className="flex gap-2 mt-2 text-xl">
          <button onClick={toggleLike}>{liked ? "💖" : "❤️"}</button>
          <button onClick={toggleWatchLater}>{saved ? "✅" : "➕"}</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
