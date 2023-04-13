import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCardPortion from "./components/ReservationCard";

export default function RestaurantDetails() {
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
      <div className="w-[27%] relative">
        <ReservationCardPortion />
      </div>
    </>
  );
}
