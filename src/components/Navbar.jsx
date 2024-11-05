import logo from "../assets/logo.svg";
import downArrow from "../assets/downArrow.svg";
import threeLine from "../assets/threeLine.svg";
import searchIcon from "../assets/searchIcon.svg";

const Navbar = ({ searchQuery, onSearchQueryChange, selectedCategory }) => {
  return (
    <div className="flex justify-between mx-16">
      <div className="flex my-3">
        <a href="/">
          <img src={logo} alt={logo} className="w-28 h-10 object-contain" />
        </a>
        <div className="relative w-[35rem] ml-2">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="h-10 w-full border border-gray-300 rounded-sm pl-10 pr-2 text-sm bg-white disabled:bg-gray-200"
            onChange={onSearchQueryChange}
            value={searchQuery}
            disabled={
              selectedCategory === "Events" || selectedCategory === "Streams"
            }
          />
          <img
            src={searchIcon}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 object-contain"
            alt="Search Icon"
          />
        </div>
      </div>
      <div className="flex justify-between my-4 items-center">
        <div className="flex mr-5">
          <span className="text-[14px] mr-1 pt-1.5">Kolkata</span>
          <div className="py-2 px-2">
            <img
              src={downArrow}
              alt={downArrow}
              className="w-4 h-4 object-contain "
            />
          </div>
        </div>

        <div className="flex">
          <button className="bg-[#f84464] text-slate-100 border border-[#f84464] rounded-md w-[4.2rem] h-7 text-sm">
            Sign in
          </button>
          <img
            src={threeLine}
            alt={threeLine}
            className="w-5 h-5 object-contain ml-6 my-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
