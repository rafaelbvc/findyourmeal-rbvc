import Description from "./components/description";
import Images from "./components/images";
import Ratings from "./components/ratings";
import ReservationCard from "./components/reservationCard";
import RestaurantNavBar from "./components/restaurantNavBar";
import Reviews from "./components/reviews";
import Title from "./components/title";


function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Ratings />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}

export default RestaurantDetails;
