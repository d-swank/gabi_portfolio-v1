import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Gabriela Swank | Fraud Prevention & Cybersecurity",
  description:
    "Portfolio for Gabriela Swank, blending finance operations, fraud prevention, compliance, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-100 min-h-screen relative overflow-x-hidden overflow-y-auto`}
      >
        {/* Global floating background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <FloatingShapes />
        </div>

        {children}
      </body>
    </html>
  );
}
