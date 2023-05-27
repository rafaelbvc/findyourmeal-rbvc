import Header from "./components/Header";

import { FetchRestaurants } from "../services/fetchRestaurants";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  const restaurants = await FetchRestaurants();
  
  return (
    <main>
      <Header/>
      <h1 className="text-center font-reg mt-2 -mb-6">Some functionalities may not be connected due to maintenance and implementation of new applications.</h1>
      <div className="py-2 lg:px-30 md:px-15 sm:mt-2 lg:mt-10 md:mt-5 sm:px-4 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
