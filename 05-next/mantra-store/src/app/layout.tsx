import type { Metadata } from "next";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MainNavigation from "@/components/main-navigation/main-navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// metadata defaults / metadata shared among pages
export const metadata: Metadata = {
    title: "Mantra Store",
    description:
        "Mantra Store - shop from our wide variety of products. Have them delivered within 2 hours at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MainNavigation />
        <div className="max-w-screen-xl mx-auto mt-12 px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
