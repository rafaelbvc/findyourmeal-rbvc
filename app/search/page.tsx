import Header from "../components/header";
import { fetchRestaurantsByFilters } from "../services/fetchRestaurantsByFilters";
import SearchSideBar from "./components/searchSideBar";
import {fetchLocations} from "../services/fetchLocations";
import {fetchCuisines} from "../services/fetchCuisines";
import { SearchParamsType } from "../interfaces/searchParamsType";
import RestaurantSearchCard from "./components/restaurantSearchCard";


async function Search({ searchParams }: { searchParams: SearchParamsType;}) {
  const restaurants = await fetchRestaurantsByFilters(searchParams);
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
              <RestaurantSearchCard key={restaurant.id} restaurant={restaurant}/>
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
