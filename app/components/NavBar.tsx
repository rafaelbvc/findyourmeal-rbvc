"use client";

import Link from "next/link";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModal from "./authModal";
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";

function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link
        href="/"
        className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-500"
      >
        OpenTable{" "}
      </Link>
      <div className="ml-[50rem] mr-[2rem] flex justify-between  w-[18rem]">
        <p className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-500">
          Rafael Vendramini
        </p>
        <Link
          href={"https://github.com/rafaelbvc/rvbvcopentablenextjs"}
          target="blank"
        >
          <Image
            src={GitIcon}
            alt="Git Hub Icon"
            className="w-[2rem] h-[2rem]"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/rafael-vendramini/"}
          target="blank"
        >
          <Image
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            className="w-[2.1rem] h-[2.1rem]"
          />
        </Link>
      </div>
      <div>
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
    </nav>
  );
}

export default NavBar;
