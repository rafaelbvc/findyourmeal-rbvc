import "../globals.css";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Search - OpenTable - Clone</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="OpenTable Clone"
          content="A OpenTable clone by Rafael Vendramini"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
