import Header from "../components/header";
import RestaurantCard from "./components/restaurantSearchCard";
import { fetchRestaurantsByCity } from "../services/fetchRestaurantsByCity";
import SearchSideBar from "./components/searchSideBar";
import {fetchLocations} from "../services/fetchLocations";
import {fetchCuisines} from "../services/fetchCuisines";
import { PRICE } from ".prisma/client";


async function Search({ searchParams }: { searchParams: { city?: string, cuisine?: string, price?: PRICE }; }) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={location} cuisines={cuisine} searchParams={searchParams}/>
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            ))
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
