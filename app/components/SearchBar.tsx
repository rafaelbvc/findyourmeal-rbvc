"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./styles/SearchBarStyles"

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className={`${styles.returnSearchBarStyles.divMain}`}>
      <input
        className={`${styles.returnSearchBarStyles.inputSearch}`}
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className={`${styles.returnSearchBarStyles.buttonLetsGo}`}
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

