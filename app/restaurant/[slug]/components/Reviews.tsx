import { Review } from "@prisma/client";
import ReviewCard from "./reviewCard";

export default function Reviews(reviews: { reviews: Review[] }) {
  // const [counter, setCounter] = useState(0);
  const reviewsNumber = reviews.reviews.length;
  let counter = 0;
  // console.log(reviews.reviews.length);

  // console.log(
  //   reviews.reviews[1],
  //   "wg3rwgqjmrgoijpgheioqgriogjri",
  //   reviewsNumber
  // );

  // const loopCard = () => {
  //   while (counter <= reviewsNumber) {
  //     <ReviewCard
  //     firstName={reviews.reviews[counter].first_name}
  //     lastName={reviews.reviews[counter].last_name}
  //     textArea={reviews.reviews[counter].text}
  //   />
    

  //   return (

  //   );
  // };

  // console.log(loopCard())

  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 people are saying
      </h1>
      {/* <div>{loopCard()}</div> */}
    </div>
  );
}
