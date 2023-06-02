import Header from "../components/Header";

import SearchSideBar from "./components/SearchSideBar";
import { FetchRestaurantsByFilters } from "../../services/fetchRestaurantsByFilters";
import { ISearchParams } from "../interfaces/IRearchParams";
import RestaurantSearchCard from "./components/RestaurantSearchCard";
import { FetchLocations } from "../../services/fetchLocations";
import { FetchCuisines } from "../../services/fetchCuisines";

async function Search({ searchParams }: { searchParams: ISearchParams }) {
  const restaurants = await FetchRestaurantsByFilters(searchParams);
  const location = await FetchLocations();
  const cuisine = await FetchCuisines();

  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantSearchCard
                key={restaurant.id}
                restaurant={restaurant}
              />
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
