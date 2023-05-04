"use client"

import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import SearchBar from "./searchBar";



const Header = () => {
  const {data} = useContext(AuthenticationContext)

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold bm-2">
          Find Your Table For Any Occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header