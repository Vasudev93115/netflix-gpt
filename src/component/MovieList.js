import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-3 sm:px-6 md:px-8 py-4">
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
        {title}
      </h1>

      <div className="flex gap-3 sm:gap-4 overflow-x-scroll no-scrollbar scroll-smooth">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
