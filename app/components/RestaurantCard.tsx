import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/mama-shelter-downstairs">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/43566622.jpg"
          alt="imagem"
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Mama Shelter Downstairs</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3">Contemporary American</p>
          <p className="mr-3">$$$$$$</p>
          <p>Los Angeles</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 29 times today</p>
      </Link>
    </div>
  );
}
