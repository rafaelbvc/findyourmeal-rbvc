import SearchBar from "../components/SearchBar";
import "../globals.css";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}

export const metadata = {
  title: "Search Restaurants | OpenTable | Custom",
};
