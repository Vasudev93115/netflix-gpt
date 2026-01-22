import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div
      className="
        p-3 sm:p-4 md:p-6
        m-2 sm:m-4
        bg-gradient-to-t from-black via-slate-800 to-black
        text-white
      "
    >
      <div className="space-y-6 sm:space-y-8">
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
