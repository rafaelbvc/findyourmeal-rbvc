import Header from "./components/header";
import RestaurantCard from "./components/restaurantCard";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </main>
  );
};

export default Home;
