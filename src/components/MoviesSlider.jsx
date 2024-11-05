import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import MoviesDataCtx from "../context/MoviesContext";
const MoviesSlider = () => {
  const { movies } = useContext(MoviesDataCtx);

  if (typeof movies === "string") {
    return movies;
  }

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      navigation={true}
      modules={[Navigation]}
    >
      {movies.map((movie, inx) => (
        <SwiperSlide key={inx}>
          <MovieCard title={movie.Title} imageURL={movie.Poster} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesSlider;
