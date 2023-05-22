"use client";

import Link from "next/link";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModal from "./authModal";
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
import { exportUrls } from "../../utils/exportUrls";

function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white py-2 px-3 ">
      <div className="column md:flex md:w-full md:justify-between lg:justify-between lg:flex lg:w-full">
        <Link
          href="/"
          className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-500"
        >
          OpenTable{" "}
        </Link>
        <div className="hidden w-[18rem] sm:justify-between md:flex lg:flex md:w-[18rem] lg:w-[18rem] md:justify-between lg:justify-between">
          <p className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-500">
            Rafael Vendramini
          </p>

          <Link href={exportUrls.github} target="blank">
            <Image
              src={GitIcon}
              alt="Git Hub Icon"
              className="w-[2rem] h-[2rem]"
            />
          </Link>
          <Link href={exportUrls.linkedin} target="blank">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              className="w-[2.1rem] h-[2.1rem]"
            />
          </Link>
        </div>
        <div className="md:flex lg:flex sm:hidden">
          {loading ? null : (
            <div className="flex">
              {data ? (
                <button
                  className="bg-blue-400 text-white p-1 px-4 rounded hover:bg-blue-500"
                  onClick={signout}
                >
                  Sign out
                </button>
              ) : (
                <>
                  <AuthModal isSignin={true} />
                  <AuthModal isSignin={false} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
