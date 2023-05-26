import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] sm:h-[7rem] sm:p-1 md:h-44 md:p-1 lg:h-[13rem] lg:p-3 ">
      <div className="text-center md:m-1 lg:mt-4">
        <h1 className="text-white font-bold sm:text-lg md:text-4xl md:my-2 lg:text-5xl">
          Find Your Table For Any Occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
