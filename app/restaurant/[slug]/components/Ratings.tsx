import { Review } from "@prisma/client";
import RestaurantCardType from "../../../interfaces/restaurantCardType";



export default function Rating({reviews}:{reviews: Review[]}) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <div className="text-reg ml-3">4.9</div>
        <p className="text-reg ml-4">{}</p>
      </div>
    </div>
  );
}
