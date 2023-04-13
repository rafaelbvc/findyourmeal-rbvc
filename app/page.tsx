"use client";

import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () =>{

const router = useRouter();
const [location , setLocation] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable{" "}
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Sing in
              </button>
              <button className="border p-1 px-4 rounded">Sing up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold bm-2">
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <div className="text-left py-3 m-auto flex justify-center">
                <input
                  className="rounded text-lg mr-3 p-2 w-[450px]"
                  type="text"
                  placeholder="State, city or town"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={() => {
                  if ( location === "anything" ) return;
                  router.push("/search")
                }}>
                  Let`s go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD */}

            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Link href="/restaurant/mama-shelter-downstairs">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/3/43566622.jpg"
                  alt="imagem"
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">
                    Mama Shelter Downstairs
                  </h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">Contemporary American</p>
                  <p className="mr-3">$$$$$$</p>
                  <p>Los Angeles</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 29 times today</p>
              </Link>
            </div>

            {/* CARD */}
          </div>
          {/* CARDS Fix*/}
        </main>
      </main>
    </main>
  );
}


export default Home