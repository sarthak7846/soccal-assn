import movies from "../assets/movies.png";
import hsbc from "../assets/hsbc.png";
import sports from "../assets/sports.png";
import music from "../assets/music.png";
import comedy from "../assets/comedy.png";
import amusement from "../assets/amusement.png";
import seeAll from "../assets/seeAll.png";

const Categorybar = ({ mobileView, onCategoryChange }) => {
  const categories = [
    "Movies",
    "Streams",
    "Events",
    "Plays",
    "Sports",
    "Activities",
  ];
  const mobileViewCategories = [
    movies,
    hsbc,
    sports,
    music,
    comedy,
    amusement,
    seeAll,
  ];

  if (mobileView) {
    return (
      <div className="flex overflow-x-auto border border-t py-1 justify-around">
        {mobileViewCategories.map((category, inx) => (
          <a
            href="/#Movies"
            key={inx}
            className="flex-shrink-0 w-14"
            onClick={() => onCategoryChange("Movies")}
          >
            <img
              src={category}
              alt={category}
              className="object-cover w-full h-full"
            />
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex justify-between px-16 py-2 bg-gray-100">
      <div className="text-[14px]">
        {categories.map((category, inx) => (
          <a
            key={inx}
            href={`/#${category}`}
            className={`${inx === 0 ? "pr-3" : "px-3"}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </a>
        ))}
      </div>
      <div className="text-[12px]">
        <a href="/" className="px-3">
          ListYourShow
        </a>
        <a href="/" className="px-3">
          Corporates
        </a>
        <a href="/" className="px-3">
          Offers
        </a>
        <a href="/" className="pl-2">
          Gift Cards
        </a>
      </div>
    </div>
  );
};

export default Categorybar;
