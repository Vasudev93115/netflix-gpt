import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-gradient-to-t from-black via-slate-800 to-black">
      
      <div className="
        relative
        -mt-32 sm:-mt-48 md:-mt-60
        z-20
        pt-6 sm:pt-8 md:pt-10
      ">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>

    </div>
  );
};

export default SecondaryContainer;
