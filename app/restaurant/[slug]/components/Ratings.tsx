import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAverage";
import Stars from "../../../components/stars";
import { IReview } from "../../../interfaces/IReview";

export default function Ratings({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <div>{Stars(calculateReviewRatingAverage(reviews))}</div>
        <div className="text-reg ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </div>
        {reviews.length <= 1 ? (
          <p className="ml-2">{`${reviews.length} Review`}</p>
        ) : (
          <p className="ml-2">{`${reviews.length} Reviews`}</p>
        )}
      </div>
    </div>
  );
}
