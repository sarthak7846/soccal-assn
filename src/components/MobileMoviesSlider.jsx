import { useContext } from "react";
import MovieCard from "./MovieCard";
import MoviesDataCtx from "../context/MoviesContext";

const MobileMoviesSlider = () => {
  const { movies } = useContext(MoviesDataCtx);

  if (typeof movies === "string") {
    return movies;
  }

  return (
    <div className="flex gap-3 overflow-x-auto">
      {movies.map((movie, inx) => (
        <MovieCard
          key={inx}
          mobileView={true}
          title={movie.Title}
          imageURL={movie.Poster}
        />
      ))}
    </div>
  );
};

export default MobileMoviesSlider;
