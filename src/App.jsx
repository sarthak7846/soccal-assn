import Categorybar from "./components/Categorybar";
import Navbar from "./components/Navbar";

import c1 from "./assets/c_img_1.png";
import c2 from "./assets/c_img_2.png";
import c3 from "./assets/c_img_3.png";
import c4 from "./assets/c_img_4.png";
import Carousel from "./components/Carousel";
import Movies from "./components/Movies";
import useScreenWidth from "./hooks/useScreenWidth";
import Topbar from "./components/Topbar";
import MobileNavbar from "./components/MobileNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesDataCtx from "./context/MoviesContext";
import movie1 from "./assets/movieImages/movie1.png";
import movie2 from "./assets/movieImages/movie2.png";
import movie3 from "./assets/movieImages/movie3.png";
import movie4 from "./assets/movieImages/movie4.png";
import movie5 from "./assets/movieImages/movie5.png";
import movie6 from "./assets/movieImages/movie6.png";
import Loader from "./components/ui/Loader";

function App() {
  const images = [c1, c2, c3, c4];
  const screenWidth = useScreenWidth();

  const [searchQuery, setSearchQuery] = useState("");

  const moviesDefaultData = [
    { Title: "Bhool Bhulaiyaa 3", Poster: movie1 },
    { Title: "Singham Again", Poster: movie2 },
    { Title: "Bohurupi", Poster: movie3 },
    { Title: "Venom: The Last Dance", Poster: movie4 },
    { Title: "Tekka", Poster: movie5 },
    { Title: "Amaran", Poster: movie6 },
  ];

  const [movies, setMovies] = useState(moviesDefaultData);
  const [selectedCategory, setSelectedCategory] = useState();

  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://www.omdbapi.com/";
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const categoryChangeHandler = (c) => {
    setSelectedCategory(c);
    setSearchQuery("");
  };

  useEffect(() => {
    if (selectedCategory === "Movies" && searchQuery.length == 0) {
      setMovies(moviesDefaultData);
    }

    const handler = setTimeout(() => {
      let searchURL = `${BASE_URL}?apikey=${apiKey}&s=${searchQuery}`;

      if (selectedCategory === "Streams" || selectedCategory === "Events") {
        setLoading(true);
        searchURL = `${BASE_URL}?apikey=${apiKey}&s=${selectedCategory}`;

        axios
          .get(searchURL)
          .then((res) => {
            setLoading(false);
            if (res.data.Response === "True") {
              setMovies(res.data.Search);
            } else {
              setMovies(res.data.Error);
            }
          })
          .catch((err) => {
            setLoading(false);
            console.err(err);
          });
      }

      if (searchQuery.length > 0) {
        setLoading(true);
        axios
          .get(searchURL)
          .then((res) => {
            setLoading(false);
            if (res.data.Response === "True") {
              setMovies(res.data.Search);
            } else {
              setMovies(res.data.Error);
            }
          })
          .catch((err) => {
            setLoading(false);
            console.err(err);
          });
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      <header>
        {screenWidth > 768 ? (
          <>
            <Navbar
              searchQuery={searchQuery}
              onSearchQueryChange={searchQueryChangeHandler}
              selectedCategory={selectedCategory}
            />
            <Categorybar onCategoryChange={categoryChangeHandler} />
          </>
        ) : (
          <>
            <Topbar
              searchQuery={searchQuery}
              onSearchQueryChange={searchQueryChangeHandler}
              selectedCategory={selectedCategory}
            />
            <Categorybar
              mobileView={true}
              onCategoryChange={categoryChangeHandler}
            />
          </>
        )}
      </header>
      {screenWidth > 768 ? (
        <div className="bg-gray-300 py-3 w-full ">
          <Carousel imagesUrl={images} />
        </div>
      ) : (
        <div className="bg-gray-300 w-full ">
          <Carousel imagesUrl={images} mobileView={true} />
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <MoviesDataCtx.Provider value={{ movies, selectedCategory }}>
          <Movies />
        </MoviesDataCtx.Provider>
      )}

      {screenWidth <= 768 && (
        <footer className="">
          <MobileNavbar />
        </footer>
      )}
    </div>
  );
}

export default App;
