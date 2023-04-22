import FetchRestaurantBySlug from "../interfaces/restaurantBySlugType";
import { prisma } from "../../utils/constants";

export const fetchRestaurantBySlug = async (
    slug: string,
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
        reviews: true,
        slug: true,
      },
    });
  
    if (!restaurant) {
      throw new Error("null");
    }
  
    return restaurant;
  };