const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black via-black/60 to-transparent">
      <div className="pt-[18%] px-16 max-w-2xl">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="text-white text-sm md:text-lg mt-6 line-clamp-3 opacity-90">
          {overview}
        </p>

        <div className="flex items-center mt-8 gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition">
            ▶ Play
          </button>

          <button className="bg-gray-600/70 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
