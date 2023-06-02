import { prisma } from "../utils/constants";
import { IRestaurantCard } from "../app/interfaces/IRestaurantCard";

export const FetchRestaurants = async (): Promise<IRestaurantCard[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
      slug: true,
    },
  });
  return restaurants;
};
