import Headerer from "./components/Headerer";

import { FetchRestaurants } from "../services/fetchRestaurants";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  const restaurants = await FetchRestaurants();
  
  return (
    <main>
      <Headerer />
      <div className="py-2 lg:px-30 md:px-15 sm:mt-2 lg:mt-10 md:mt-5 sm:px-4 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
