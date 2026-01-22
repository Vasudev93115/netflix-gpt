import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import client from "../utils/openai";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/GPTSlice";
import { Ai_Model } from "../utils/constants";

/**
 * Cleans movie names for TMDB search
 * Removes years, dots, extra spaces
 */
const cleanMovieName = (movie) => {
  return movie
    .replace(/\(.*?\)/g, "") // remove (2006)
    .replace(/[0-9]+\./g, "") // remove numbered lists
    .replace(/\./g, "") // remove dots
    .trim();
};

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  /**
   * Search movie on TMDB
   */
  const searchMovieTMDB = async (movie) => {
    const cleanedMovie = cleanMovieName(movie);

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        cleanedMovie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await response.json();
    return json.results || [];
  };

  /**
   * GPT Search Handler
   */
  const handleGptSearchClick = async () => {
    try {
      if (!searchText.current?.value.trim()) return;

      const gptQuery = `
Act as a movie recommendation engine.
Suggest 5 movies based on the following query:
"${searchText.current.value}"

Rules:
- Only movie names
- Comma separated
- No explanations
Example:
Inception, The Dark Knight, Interstellar, The Matrix, Fight Club
      `;

      const gptResults = await client.chat.completions.create({
        model: Ai_Model,
        messages: [{ role: "user", content: gptQuery }],
      });

      const gptText = gptResults.choices?.[0]?.message?.content;
      if (!gptText) throw new Error("Empty GPT response");

      // Make GPT output safe
      const gptMovies = gptText
        .replace(/\n/g, ",")
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(
        addGptMoviesResult({
          movieName: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("GPT Search Error:", error);
      alert("AI service is temporarily unavailable. Please try again.");
    }
  };

  return (
  <div className="w-full flex justify-center mt-12 sm:mt-16 px-3 sm:px-6">
    <form
      className="
        w-full max-w-3xl
        flex flex-col sm:flex-row items-stretch sm:items-center
        gap-3 sm:gap-4
        bg-white/10 backdrop-blur-md
        border border-white/20
        rounded-xl
        p-4 sm:p-6
        shadow-xl
      "
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        spellCheck={false}
        placeholder={lang[langKey]?.gptSearchBarPlaceholder}
        className="
          w-full
          px-4 sm:px-5
          py-3 sm:py-4
          rounded-lg
          text-black
          text-sm sm:text-base
          placeholder-gray-500
          outline-none
          focus:ring-2 focus:ring-purple-500
          transition-all duration-200
        "
      />

      <button
        type="submit"
        onClick={handleGptSearchClick}
        className="
          w-full sm:w-auto
          px-6 sm:px-8
          py-3 sm:py-4
          rounded-lg
          bg-gradient-to-r from-purple-600 to-indigo-600
          text-white
          text-sm sm:text-base
          font-semibold
          hover:scale-105 hover:shadow-lg
          active:scale-95
          transition-all duration-200
          whitespace-nowrap
        "
      >
        {lang[langKey]?.search}
      </button>
    </form>
  </div>
);

};

export default GptSearchBar;
