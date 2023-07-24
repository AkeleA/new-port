import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const fira = localFont({
  src: [
    {
      path: "../public/fonts/FiraCode-VariableFont_wght.ttf",
      weight: "400",
    },
  ],
  variable: "--font-fira",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira.variable} font-sans ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
