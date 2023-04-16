import NavBar from "../components/NavBar";
import "../globals.css";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar/>         
            <div>{children}</div>
          </main>
        </main>
      </body>
    </>
  );
}

export const metadata = {
  title: "Search Restaurants | OpenTable | Clone"

}