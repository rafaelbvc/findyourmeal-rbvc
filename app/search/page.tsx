import Header from "../components/header";
import { fetchRestaurantsByCity } from "../services/fetchRestaurantsByCity";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

async function Search({searchParams}: {searchParams: { city: string}}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city)
  console.log(restaurants)
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? <RestaurantCard /> : <p>Sorry, we found no restaurants in this area</p>}
        </div>
      </div>
    </>
  );
};

export default Search;
