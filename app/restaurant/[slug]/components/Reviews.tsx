import { Review } from "@prisma/client";
import ReviewCard from "./reviewCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  console.log(reviews, "euoooo");
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {reviews.length >= 2
          ? `What ${reviews.length} people are saying`
          : reviews.length === 1
          ? `What ${reviews.length} people saying`
          : ""}
      </h1>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
