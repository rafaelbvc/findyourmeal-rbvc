import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="container bgGradient p-1 flex flex-col gap-1">
        <span className="mx-auto text-xl text-white text-bold sm:my-2 sm:text-2xl lg:my-4 lg:text-3xl">
          Find Your Meal For Any Occasion
        </span>
        <SearchBar />
    </div>
  );
};

export default Header;
