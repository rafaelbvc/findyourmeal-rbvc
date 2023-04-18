import Header from "./components/header";
import RestaurantCard from "./components/restaurantCard";
import { fetchRestaurants } from "./services/fetchRestaurants";

const Home = async () => {

  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
