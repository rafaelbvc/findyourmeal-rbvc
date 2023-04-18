import Link from "next/link";

const RestaurantCard = () => {

  return (
    <div className="border-b flex pb-5">
      <img
        src="for now"
        alt="Image"
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Mama Shelter Downstairs</h2>
        <div className="flex items-start">
          <div className="flex bm-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">American</p>
            <p className="mr-4">Los Angeles</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/mama-shelter-downstairs">
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
