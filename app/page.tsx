import Header from "./components/Header";
import { FetchRestaurants } from "../services/fetchRestaurants";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  const restaurants = await FetchRestaurants();

  return (
    <main>
      <div className="h-[2.2rem]" />
      <Header />
      <p className="m-auto text-center text-xl mt-2 bold">
        ***UNDER CONSTRUCTION*** <br />
        Some functionalities may not be connected due to maintenance and
        implementation of new applications.
      </p>
      <div className="flex flex-wrap justify-center m-auto">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
