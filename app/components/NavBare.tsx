"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
import { exportUrls } from "../../utils/exportUrls";
import AuthContext, { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

function NavBare() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  // const [open, setOpen] = useState(false);
  // const { innerWidth: widthScreen} = window;

  useEffect(() => {
    //   if(widthScreen >= 768){
    //   setOpen(true)
    // }
  }, [open]);

  return (
    // {open ? () : ()}
    <nav className=" grid grid-rows-3  place-content-center">
      <Link
        href="/"
        className="text-gray-700 hover:text-gray-800 justify-between text-2xl font-bold border-b-2 px-1 border-dotted order-1"
      >
        OpenTable
      </Link>

      <div className="hidden flex justify-between w-full min-w-[320px] max-w-[768px] border-b-2 border-dotted order-3 px-1 md:flex">
        <p className="text-bold text-2xl py-1 text-gray-700 hover:text-gray-800 md:flex">
          Rafael Vendramini
        </p>
        <Link href="" className="w-8 h-8 py-1 md:flex">
          <Image src={GitIcon} alt="GitHubIcon Icon" />
        </Link>
        <Link href="" className="w-8 h-8 py-1 md:flex">
          <Image src={LinkedInIcon} alt="LinkedIn Icon" />
        </Link>
      </div>
      {/* {loading ? ():()} */}
      <div className="hidden flex justify-between w-screen max-w-[440px] px-1 py-1 order-4 md:flex">
        <button className="text-white bg-blue-400 hover:bg-gray-200 rounded max-w-sm w-1/2 py-1 px-3 mr-1">
          Sing In
        </button>
        <button className="text-white bg-gray-300 hover:bg-blue-200 rounded max-w-sm w-1/2 py-1 px-3 ml-1">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default NavBare;
