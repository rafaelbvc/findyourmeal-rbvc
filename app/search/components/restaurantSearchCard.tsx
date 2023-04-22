import Link from "next/link";
import Price from "../../components/price";
import { Cuisine, PRICE, Review, Location } from "@prisma/client";

type RestaurantSearchCartdType = {
  restaurant: {
    name: string;
    price: PRICE;
    slug: string;
    id: number;
    reviews: Review[];
    main_image: string;
    cuisine: Cuisine;
    location: Location;
  };
};

const RestaurantSearchCard = ({restaurant}: RestaurantSearchCartdType) => {
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={restaurant.main_image} alt="Image" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex bm-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSearchCard;
