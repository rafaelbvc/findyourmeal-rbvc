import "./globals.css";
import AuthContext from "./context/AuthContext";
import NavBarcopy from "./components/NavBarcopy";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>FindYourMeal</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="FindYourMeal"
          content="A OpenTable custom by Rafael Vendramini"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        <main className="basis">
          <AuthContext>
            <main className="max-w-screen-2xl">
              <NavBarcopy />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
