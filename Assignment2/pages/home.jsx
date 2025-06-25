import { videos } from "../data/dummyvideos";
import VideoCard from "../components/videocard";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
