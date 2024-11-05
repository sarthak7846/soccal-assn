import { useContext } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
import MobileMoviesSlider from "./MobileMoviesSlider";
import MoviesSlider from "./MoviesSlider";
import MoviesDataCtx from "../context/MoviesContext";

const Movies = () => {
  const { selectedCategory } = useContext(MoviesDataCtx);
  const screenWidth = useScreenWidth();

  return (
    <div className="py-9 lg:px-14 px-3 bg-gray-100 mb-8">
      <h2 className="lg:text-2xl text-lg font-bold text-slate-800 font-sans mb-4">
        {`Recommended ${selectedCategory ? selectedCategory : "Movies"}`}
      </h2>

      {screenWidth > 768 ? <MoviesSlider /> : <MobileMoviesSlider />}
    </div>
  );
};

export default Movies;
