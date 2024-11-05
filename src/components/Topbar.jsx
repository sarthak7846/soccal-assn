import searchIcon from "../assets/searchIcon.svg";
import rightArrowIcon from "../assets/rightArrowIcon.svg";
import leftArrowIcon from "../assets/leftArrowIcon.svg";
import { useState } from "react";

const Topbar = ({ searchQuery, onSearchQueryChange, selectedCategory }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarToggler = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="flex px-3 py-2 justify-between">
      {showSearchBar ? (
        <>
          <img
            src={leftArrowIcon}
            className="w-10 mr-2"
            onClick={searchBarToggler}
          />
          <input
            type="text"
            className="w-full text-xs font-sans border border-gray-300 rounded-md p-1 disabled:bg-gray-200"
            placeholder="Search for Movies, Events, Plays & more"
            onChange={onSearchQueryChange}
            value={searchQuery}
            disabled={
              selectedCategory === "Events" || selectedCategory === "Streams"
            }
          />
        </>
      ) : (
        <>
          <div>
            <h3 className="font-sans text-slate-800 text-xl font-bold">
              It All Starts Here!
            </h3>
            <div className="flex">
              <span className="text-xs text-red-600">Kolkata</span>
              <img src={rightArrowIcon} />
            </div>
          </div>
          <div className="flex">
            <button className="font-sans font-medium border border-gray-200 rounded-md py-1 px-2 text-xs text-slate-700 h-8 my-2">
              Use App
            </button>
            <button className="my-2 ml-4 mr-2" onClick={searchBarToggler}>
              <img src={searchIcon} className="w-5 h-5 object-cover" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;
