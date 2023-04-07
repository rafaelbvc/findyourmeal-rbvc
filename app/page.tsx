import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenTable{" "}
          </a>
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
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitilize text-shadow text-center">
              Mama Shelter Downstairs (Los Angeles)
            </h1>
          </div>
        </div>
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* RESTAURANT NAVBAR */}
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="front-bold text-6xl">Mama Shelter Downstairs</h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <div className="text-reg ml-3">4.9</div>
                <p className="text-reg ml-4">240 Reviews</p>
              </div>
            </div>
            {/* RATING */}
            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Mama Shelter's RESTAURANT offers breakfast, lunch, and happy
                hour daily. Our dinner service is open Wednesday-Sunday, 5:30-
                10:30pm. For parties of larger than 8 please send us a message.
                Chef Jonathan Kim provides an extensive menu featuring locally
                grown ingredients and a seasonal menu.
              </p>
            </div>
            {/* DESCRIPTION */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
