import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <head>
      <title>OpenTable - Clone</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="OpenTable Clone" content="A OpenTable clone by Rafael Vendramini" />
      <link rel="icon" href="/favicon.ico" />
    </head>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}

