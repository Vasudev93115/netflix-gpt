const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-20 bg-gradient-to-r from-black via-black/70 to-transparent">
      
      <div className="pt-[35%] sm:pt-[28%] md:pt-[18%] px-4 sm:px-8 md:px-16 max-w-full sm:max-w-xl md:max-w-2xl">
        
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="text-white text-xs sm:text-sm md:text-lg mt-3 sm:mt-4 md:mt-6 line-clamp-3 opacity-90">
          {overview}
        </p>

        <div className="flex items-center mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-3 md:gap-4">
          
          <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold hover:bg-opacity-80 transition">
            ▶ Play
          </button>

          <button className="bg-gray-600/70 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-600 transition">
            More Info
          </button>

        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
