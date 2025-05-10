"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingShapes from "@/components/common/FloatingShapes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-100 min-h-screen relative`}
      >
        {/* Global floating background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <FloatingShapes />
        </div>

        {children}
      </body>
    </html>
  );
}
