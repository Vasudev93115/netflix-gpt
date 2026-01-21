import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
    const {movieResults, movieName} = useSelector((store) => store.gpt);
    if(!movieName) return null;
    return (
        <div className="p-4 m-4 bg-gradient-to-t from-black via-slate-800 to-black opacity-70 text-white">
            <div>
                {movieName.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
                
            </div>
        </div>
    );
};
export default GptMovieSuggestion;