import Cuisines from "../../interfaces/cuisinesType";
import Locations from "../../interfaces/locationsType";

function SearchSideBar({
  locations,
  cuisines,
}: {
  locations: Locations[];
  cuisines: Cuisines[];
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <p key={location.id} className="font-light text-reg capitalize">
            {location.name}
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p key={cuisine.id} className="font-light text-reg capitalize">
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
