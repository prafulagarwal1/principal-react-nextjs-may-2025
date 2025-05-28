import type { Metadata } from "next";
import Providers from "@/components/lib/providers/providers";

import "./globals.css";

import MainNavigation from "@/components/main-navigation/main-navigation";

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
        <Providers>
          <MainNavigation />
          <div className="max-w-screen-xl mx-auto mt-12 px-4">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
