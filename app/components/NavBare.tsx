"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
import { exportUrls } from "../../utils/exportUrls";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { TroubleshootSharp } from "@mui/icons-material";

function NavBare() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  const [open, setOpen] = useState(false);

  const handleWindowWidth = () => {
    const { innerWidth: widthScreen } = window;
    if (widthScreen >= 768) {
      setOpen(true);
    }
  };

  useEffect(() => {
    handleWindowWidth;
  }, [open]);

  return (
    <>
      {open === false ? (
        <nav className="flex mx-auto justify-between  min-w-[320px]  max-w-[440px]   border-b-2 border-dotted ">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-800 text-1xl font-bold  order-1 self-center"
          >
            OpenTable-Custom
          </Link>
          <div
            className="h-7 w-7 order-2 mb-1  mt-2 pl-1 pt-0 cursor-pointer border hover:bg-gray-200 rounded mr-1 md:hidden"
            onClick={() => setOpen(true)}
          >
            <div className="leading-[6px] text-gray-700 hover:text-gray-800 text-5xl pl-1">
              -
            </div>
            <div className="leading-[6px] text-gray-700 hover:text-gray-800 text-5xl">
              -
            </div>
            <div className="leading-[6px] text-gray-700 hover:text-gray-800 text-5xl pl-1">
              -
            </div>
            {/* </div> */}
          </div>
        </nav>
      ) : (
        <nav className="grid grid-rows-3  place-content-center bg-white">
          <div className="flex justify-between  w-full min-w-[320px] max-w-[440px] px-1 border-b-2 border-dotted ">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-800 pl-1  text-1xl font-bold  order-1 self-center"
            >
              OpenTable-Custom
            </Link>
            <div
              className="flex h-7 w-7 order-2 mt-2 pt-0 cursor-pointer border rounded mr-1"
              onClick={() => setOpen(false)}
            >
              <p className="leading-[3px] self-center text-gray-700 hover:text-gray-800 text-3xl pl-[0.4rem] font-extrabold font-mono">
                X
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full min-w-[320px] max-w-[440px] border-b-2 border-dotted px-1 order-3 md:flex">
            <p className="text-bold pl-1 text-1xl  self-center text-gray-700 hover:text-gray-800 md:flex">
              Rafael Vendramini
            </p>
            <Link href="" className="w-9 h-9 md:flex self-center">
              <Image src={GitIcon} alt="GitHubIcon Icon" />
            </Link>
            <Link href="" className="w-[2.5rem] h-[2.5rem] md:flex self-center">
              <Image src={LinkedInIcon} alt="LinkedIn Icon" />
            </Link>
          </div>
          {/* {loading ? ():()} */}
          <div className="flex justify-between w-screen min-w-[320px] max-w-[440px] px-2 py-1 order-4 md:flex">
            <button className="text-white bg-blue-400 hover:bg-gray-200 rounded max-w-sm w-1/2 py-1 px-3 mr-1">
              Sing In
            </button>
            <button className="text-white bg-gray-300 hover:bg-blue-200 rounded max-w-sm w-1/2 py-1 px-3 ml-1">
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBare;
