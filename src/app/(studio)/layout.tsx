// import type { Metadata } from "next";
import "./globals.css";
// import AppShell from "@/components/AppShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="no-js">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favico.ico" />
        <link rel="apple-touch-icon" href="/assets/favico.ico" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
