import { Cuisine, Location } from "@prisma/client";

export interface RestaurantSearchCartdType {
  id: number;
  name: string;
  main_image: string;
  price: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}
