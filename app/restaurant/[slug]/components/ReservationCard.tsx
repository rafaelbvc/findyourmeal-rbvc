"use client";

import { useState } from "react";
import { partySize, times } from "../../../../data";
import ReactDatePicker from "react-datepicker";
import useAvailabilities from "../../../../hooks/useAvailabilities";

const ReservationCard = ({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) => {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [date, setChangeDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySizes, setPartySizes] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeData = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setChangeDate(date);
    }
    return setChangeDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize: "",
    });
  };

  const filterRestaurantTimeByOpeningHours = () => {
    const timesInWindow: typeof times = [];
    let isWithinWindow = false;
    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesInWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });
    return timesInWindow;
  };

  return (
    <>
      <div className="fixed w-[15%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party Size</label>
          <select
            name=""
            className="py-3 border-b font-light"
            id=""
            value={partySizes}
            onChange={(e) => setPartySizes(e.target.value)}
          >
            {partySize.map((size) => (
              <option value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Date</label>
            <div className="w-[2rem] start h-auto ">
              {" "}
              <ReactDatePicker
                selected={date}
                onChange={(date) => setChangeDate(date)}
                className="py-3 border-b font-light text-reg w-[5.6rem]"
                dateFormat="MMMM d"
                wrapperClassName="w-[48%]"
              />
            </div>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select
              name=""
              id=""
              className="py-3 border-b font-light"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {filterRestaurantTimeByOpeningHours().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="bg-red-600 rounded w-full px-4 text-white font-bold h-16 hover:bg-red-700"
            onClick={handleClick}
          >
            Find a Time
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationCard;
