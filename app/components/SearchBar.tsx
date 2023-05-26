"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="gap-2 grid grid-rows-2 mx-auto max-w-[26rem] md:gap-3 md:max-w-[34rem] lg:max-w-[46rem] lg:flex lg:justify-between lg:mt-7 ">
      <input
        className="rounded h-[1.8rem] mt-1 px-2 md:h-[2.1rem] lg:h-[2.3rem]  lg:min-w-[38rem]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded text-white h-[1.8rem] bg-red-600 hover:bg-red-700 md:h-[2.1rem] lg:h-[2.3rem] lg:min-w-[7rem] lg:text-md lg:mt-1"
        onClick={() => {
          if (location === "anything") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let`s Go!
      </button>
    </div>
  );
};

export default SearchBar;

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const SearchBar = () => {
//   const router = useRouter();
//   const [location, setLocation] = useState("");

//   return (
//     <div className="text-left sm:flex sm:flex-col sm:mx-auto sm:w-[19.4rem]  sm:center  sm:mt-1 md:flex-row md:w-[36rem] lg:w-[40rem] lg:py-3 lg:m-auto lg:flex-row lg:justify-center">
//       <input
//         className="rounded sm:pl-1 md:text-lg lg:text-lg md:mr-2 lg:mr-3 md:p-2 lg:p-2 sm:mb-[0.5rem] sm:h-[2rem]   md:w-[29rem] lg:w-[31rem] lg:mb-0 md:h-[2.5rem] lg:h-[2.5rem]"
//         type="text"
//         placeholder="State, city or town"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <button
//         className="rounded bg-red-600 md:px-7 md:w-[7rem] lg:w-[8rem] md:text-reg lg:px-9 md:py-2 md:h-[2.5rem] lg:py-2 text-white hover:bg-red-700"
//         onClick={() => {
//           if (location === "anything") return;
//           router.push(`/search?city=${location}`);
//           setLocation("");
//         }}
//       >
//         Let`s go
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
