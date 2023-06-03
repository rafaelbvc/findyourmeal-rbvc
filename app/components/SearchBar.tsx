"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeBtn from "./buttons/ThemeBtn";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="container flex flex-col p-1 items-center gap-2 sm:flex-row sm:justify-center sm:mb-4 lg:mb-8">
      <input
        className="rounded flex w-full px-1 min-w-[19rem] max-w-[28rem] h-[1.7rem] sm:h-[1.9rem] lg:h-[2.2rem]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <ThemeBtn
        colorBtn="red"
        text="Let`s Go"
        tColor="white"
        tSize="text-md"
        resize={"w-full max-w-[28rem] h-[1.7rem] sm:w-[6.25rem] sm:h-[1.9rem] lg:h-[2.2rem]"}
        onClick={() => {
          if (location === "anything") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      />
    </div>
  );
};

export default SearchBar;
