import Menu from "../components/menu";
import RestaurantNavBar from "../components/restaurantNavBar";

export default function RestaurantMenu() {
  return (
    <>
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
    </>
  );
}
