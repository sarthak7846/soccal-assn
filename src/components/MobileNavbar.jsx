import home from "../assets/home.png";
import movies from "../assets/movies2.png";
import liveEvents from "../assets/liveEvents.png";
import profile from "../assets/profile.png";

const MobileNavbar = () => {
  const navbarIcons = [
    { iconURL: home, name: "Home" },
    { iconURL: movies, name: "Movies" },
    { iconURL: liveEvents, name: "Live Events" },
    { iconURL: profile, name: "Profile" },
  ];

  return (
    <div className="flex justify-around py-1 border border-t fixed bottom-0 w-full bg-white z-10">
      {navbarIcons.map((navbarIcon, inx) => (
        <div key={inx} className="flex flex-col items-center">
          <img
            src={navbarIcon.iconURL}
            alt={navbarIcon.name}
            className="object-cover w-6"
          />
          <span className="text-[13px] font-sans text-slate-700 ">
            {navbarIcon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MobileNavbar;
