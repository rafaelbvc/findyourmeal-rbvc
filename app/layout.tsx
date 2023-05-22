// import NavBar from "./components/NavBar";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import NavBare from "./components/NavBare";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>OpenTable | Custom</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="OpenTable Custom"
          content="A OpenTable custom by Rafael Vendramini"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-xlg m-auto bg-white">
              <NavBare />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
