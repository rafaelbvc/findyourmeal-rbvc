import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] sm:h-[7rem] sm:p-1 md:h-44 md:p-2 lg:h-64 lg:p-2 ">
      <div className="text-center md:mt-3 lg:mt-10">
        <h1 className="text-white font-bold sm:text-xl md:text-4/5xl md:mb-1 lg:text-5xl lg:mb-2">
          Find Your Table For Any Occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
