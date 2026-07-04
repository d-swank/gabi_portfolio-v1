import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t!=="light");document.documentElement.style.colorScheme=t==="light"?"light":"dark"}catch{document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--app-bg)] text-[var(--text-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
