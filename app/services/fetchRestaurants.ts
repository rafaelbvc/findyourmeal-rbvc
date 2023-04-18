import { prisma } from "../utils/constants";
import RestaurantCardType from "../interfaces/restaurantCardType";

export const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
    const restaurants = await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true, 
        price: true,
        slug: true
      },
    });
    return restaurants;
  };
