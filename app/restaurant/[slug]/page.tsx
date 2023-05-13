import { FetchRestaurantBySlug } from "../../../services/fetchRestaurantsBySlug";
import Description from "./components/Description";
import Images from "./components/Images";
import Ratings from "./components/ratings";
import ReservationCard from "./components/ReservationCard";

import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/reviews";
import Title from "./components/title";



async function RestaurantDetails({ params }: { params: {slug: string}}) {


  const restaurant = await FetchRestaurantBySlug(params.slug);
  


  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar  slug={restaurant.slug}/>
        <Title name={restaurant.name}/>
        <Ratings reviews={restaurant.reviews}/>
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews reviews={restaurant.reviews}/>
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard  openTime={restaurant.open_time} closeTime={restaurant.close_time} slug={restaurant.slug}/>
      </div>
    </>
  );
}

export default RestaurantDetails;
