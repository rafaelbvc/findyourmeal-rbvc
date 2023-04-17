import { PrismaClient } from "@prisma/client";
import Description from "./components/description";
import Images from "./components/images";
import Ratings from "./components/ratings";
import ReservationCard from "./components/reservationCard";
import RestaurantNavBar from "./components/restaurantNavBar";
import Reviews from "./components/reviews";
import Title from "./components/title";

interface FetchRestaurantBySlug {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (
  slug: string
): Promise<FetchRestaurantBySlug> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error("null");
  }

  return restaurant;
};

async function RestaurantDetails({ params }: { params: { slug: string } }) {


  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar  slug={restaurant.slug}/>
        <Title name={restaurant.name}/>
        <Ratings />
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}

export default RestaurantDetails;
