import { format } from "date-fns";
import {
  Time,
  convertToDisplayTime,
} from "../../../../utils/convertToDisplayTime";

const Header = ({
  image,
  name,
  date,
  partySize,
}: {
  image: string;
  name: string;
  date: string;
  partySize: string;
}) => {
  const [day, time] = date.split("T");

  return (
    <div>
      <div className="flex h-96  overflow-hidden">
        <div className="bg-center  h-full flex justify-center items-center">
          <img src={image} alt="Image" />
        </div>
      </div>
      <div className="flex">
        <div className="ml-4 flex justify-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mr-6 mt-[0.6rem] ml-[1rem]">
            {format(new Date(date), "ccc, MMM d")}
          </p>
          <p className="mr-6 mt-[0.6rem]">
            {convertToDisplayTime(time as Time)}
          </p>
          <p className="mr-6 mt-[0.6rem]">
            {partySize} {parseInt(partySize) === 1 ? "person" : "people"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div>
<div className="mt-5 flex">
  <img src={image} alt="Image" className="w-32 h-18 rounded" />
  <div className="ml-4">
    <h1 className="text-3xl font-bold">{name}</h1>
    <div className="flex mt-3">
      <p className="mr-6 bold">{format(new Date(date), "ccc, MMM d")}</p>
      <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
      <p className="mr-6">{partySize} {parseInt(partySize) === 1 ? "person" : "people"}</p>
    </div>
  </div>
</div>
</div> */
}
