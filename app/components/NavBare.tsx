"use client";

import Link from "next/link";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
import { exportUrls } from "../../utils/exportUrls";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const handleStyles = {
  openSM: "grid grid-rows-3  place-content-center whitespace-nowrap",
  closeSM: "flex justify-between",
};

function NavBare() {
  const [getWidth, setGetWidth] = useState(0);
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  const [humb, setHamb] = useState("");
  const [hiddenFlex, setHiddenFlex] = useState("hidden");
  const [displayContent, setDisplayContent] = useState(handleStyles.closeSM);

  useLayoutEffect(() => {
    setGetWidth(window.innerWidth);
  });

  return (
    <nav
      className={`sm:${displayContent} mx-auto sm:min-w-[320px] sm:max-w-[440px] md:flex`}
    >
      {/* //TODO */}
      <div className="flex justify-between">
        <Link
          href="/"
          className="text-gray-700 hover:text-gray-800 text-1xl font-bold  order-1 self-center pl-1 "
        >
          OpenTable
        </Link>
        <div className={`${!hiddenFlex} sm:${humb} order-2`}>
          <div
            className={`flex flex-wrap animate-pulse  transition duration-1000 ease-in-out h-7 w-7 mb-1 mr-1  my-1 pl-1 pt-0 cursor-pointer border bg-white hover:bg-gray-200 rounded md:hidden`}
            onClick={() => {
              setHiddenFlex("flex");
              setDisplayContent(handleStyles.openSM);
              setHamb("hidden");
            }}
          >
            <div className="leading-[8px] text-gray-700 hover:text-gray-800 text-5xl pl-1 my-[-0.2rem]">
              -
            </div>
            <div className="leading-[1px] text-gray-700 hover:text-gray-800 text-5xl my-[-0.2rem]">
              -
            </div>
            <div className="leading-[0.1px] text-gray-700 hover:text-gray-800 text-5xl my-[-0.2rem] pl-1">
              -
            </div>
          </div>
        </div>
        <div
          className={`${hiddenFlex} h-7 w-7 animate-pulse transition duration-1000 ease-in-out order-2 mt-1  pt-0 cursor-pointer border rounded mr-1`}
          onClick={() => {
            setHiddenFlex("hidden");
            setDisplayContent(handleStyles.closeSM);
            setHamb("");
          }}
        >
          <p className="leading-[3px]  self-center text-gray-700 hover:text-gray-800 ml-1  text-3xl pl-[0.15rem] font-extrabold font-mono">
            X
          </p>
        </div>
      </div>
      <div
        className={`${hiddenFlex} justify-between w-full min-w-[320px] max-w-[440px] border-b-2 border-dotted order-3 md:flex`}
      >
        <p className="font-bold pl-1 text-1xl  self-center text-gray-700 hover:text-gray-800 md:flex">
          Rafael Vendramini
        </p>
        <Link href="" className="w-9 h-9 self-center flex">
          <Image src={GitIcon} alt="GitHubIcon Icon" />
        </Link>
        <Link href="" className="w-[2.5rem] h-[2.5rem] self-center flex">
          <Image src={LinkedInIcon} alt="LinkedIn Icon" />
        </Link>
      </div>
      <div
        className={`${hiddenFlex} justify-between w-screen min-w-[320px] max-w-[440px] mx-1 py-1 pr-2 order-4`}
      >
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
