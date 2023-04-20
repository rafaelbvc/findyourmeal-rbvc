import { PRICE } from "@prisma/client";
import { prisma } from "../utils/constants";
import { SearchParamType } from "../interfaces/searchParamType";


export const fetchRestaurantsByFilters = async({city, price, cuisine}:SearchParamType) => {
  const querySearch = await prisma.restaurant.findMany({
    where: {
      cuisine: {
        name: {
          equals: cuisine?.toLocaleLowerCase(),
        },
      },
      location: {
        name: {
          equals: city?.toLocaleLowerCase(),
        },
      },
      price: {
        equals: price,
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
    },
  })
  if (!querySearch) {
    throw new Error("NULL");
  }
  return querySearch
};

