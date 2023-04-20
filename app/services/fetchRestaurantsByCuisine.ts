import { prisma } from "../utils/constants";

export const fetchRestaurantsByCuisine = async (cuisine: string | undefined ) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!cuisine) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      cuisine: {
        name: {
            equals: cuisine,
        }
      },
    },
    select,
  });
};
