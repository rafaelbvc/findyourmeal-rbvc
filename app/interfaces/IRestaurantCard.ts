import { Cuisine, PRICE, Location, Review } from "@prisma/client";

export interface IRestaurantCard {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
  slug: string;
}
