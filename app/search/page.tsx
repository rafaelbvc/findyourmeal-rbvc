import Header from "../components/header";
import RestaurantCard from "./components/restaurantSearchCard";
import { fetchRestaurantsByCity } from "../services/fetchRestaurantsByCity";
import SearchSideBar from "./components/searchSideBar";
import fetchLocations from "../services/fetchLocations";
import fetchCuisines from "../services/fetchCuisines";


async function Search({ searchParams }: { searchParams: { city: string } }) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const location = await fetchLocations()
  const cuisine = await fetchCuisines()
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={location} cuisines={cuisine}/>
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
