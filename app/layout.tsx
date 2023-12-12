import "@/animations/animations.css";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, } from "next/font/google";
import { useState, useEffect } from "react";

// components
import Navbar from "@/components/navbar";

const poppins = Nunito({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "standby",
  description: "the next generation of gaming",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {

  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
