import Description from "./components/description";
import Images from "./components/images";
import Ratings from "./components/ratings";
import ReservationCard from "./components/reservationCard";
import RestaurantNavBar from "./components/restaurantNavBar";
import Reviews from "./components/reviews";
import Title from "./components/title";
import { fetchRestaurantBySlug } from "../../services/fetchRestaurantsBySlug";


async function RestaurantDetails({ params }: { params: {slug: string}}) {


  const restaurant = await fetchRestaurantBySlug(params.slug);


  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar  slug={restaurant.slug}/>
        <Title name={restaurant.name}/>
        <Ratings reviews={restaurant.reviews}/>
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        {/* <Reviews reviews={restaurant.reviews}/> */}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}

export default RestaurantDetails;
