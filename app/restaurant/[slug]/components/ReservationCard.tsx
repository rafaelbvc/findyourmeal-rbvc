"use client";

import { useState } from "react";
import { partySize, times } from "../../../../data/index";
import ReactDatePicker from "react-datepicker";

const ReservationCard = ({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) => {
  const [date, setDate] = useState<Date | null>(new Date());
  // const [time, setTime] = useState<Date | null>()

  const handleData = (date: Date | null) => {
    if (date) {
      return setDate(date);
    }
    return setDate(null);
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
      if(time.time === closeTime){
        isWithinWindow = false;
      }
    });
    return timesInWindow
  };

  return (
    <>
      <div className="fixed w-[15%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party Size</label>
          <select name="" className="py-3 border-b font-light" id="">
            {partySize.map((people) => (
              <option value={people.value}>{people.label}</option>
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
                onChange={(date) => setDate(date)}
                className="py-3 border-b font-light text-reg w-[5.6rem]"
                dateFormat="MMMM d"
                wrapperClassName="w-[48%]"
              />
            </div>
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select name="" id="" className="py-3 border-b font-light z-10">
              {filterRestaurantTimeByOpeningHours().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16 hover:bg-red-700">
            Find a Time
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationCard;
