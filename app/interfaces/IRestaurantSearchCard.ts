import { Cuisine, PRICE, Review, Location } from "@prisma/client";

export default interface IRestaurantSearchCard {
  restaurant: {
    id: number;
    name: string;
    price: PRICE;
    slug: string;
    reviews: Review[];
    main_image: string;
    cuisine: Cuisine;
    location: Location;
  };
}
