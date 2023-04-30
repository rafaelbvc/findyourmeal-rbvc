import Header from "./components/header";
import RestaurantCard from "./components/restaurantCard";
import { FetchRestaurants } from "./services/fetchRestaurants";

const Home = async () => {

  const restaurants = await FetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-48 mt-10 flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
