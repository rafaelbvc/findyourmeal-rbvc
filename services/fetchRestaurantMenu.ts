import { prisma } from "../utils/constants";

export const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items_id: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }
  return restaurant.items_id;
};
