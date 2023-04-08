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
            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47117895.jpg"
                  alt="Imagem"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/49971254.jpg"
                  alt="Imagem"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/49971255.jpg"
                  alt="Imagem"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/49971256.jpg"
                  alt="Imagem"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/49971257.jpg"
                  alt="Imagem"
                />
              </div>
            </div>
            {/* IMAGES */}
            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">BD</h2>
                      </div>
                      <p className="text-center">Bruce Dickinson</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="mt-5">
                          <div className="flex mr-5">*****</div>
                          <p className="text-lg font-light">
                            Portions are good but dishes are generally run of
                            the mill, the bright soots are the rolls and
                            bolognese. Dishes are very overpriced for both
                            quantity and variety.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
