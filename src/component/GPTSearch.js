import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div
      className="
        min-h-screen
        pt-16 sm:pt-20 md:pt-24
        bg-gradient-to-t from-black via-slate-800 to-black
      "
    >
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
