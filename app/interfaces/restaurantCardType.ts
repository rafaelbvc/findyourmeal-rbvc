import { Cuisine, PRICE, Location } from "@prisma/client";

export default interface RestaurantCardType {
    id: number,
    name: string,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE,
    slug: string
}