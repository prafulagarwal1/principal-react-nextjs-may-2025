import type { Metadata } from "next";
import Providers from "@/components/lib/providers/providers";
import { getServerSession } from 'next-auth';

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
  const session = getServerSession();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers session={session}>
          <MainNavigation />
          <div className="max-w-screen-xl mx-auto mt-12 px-4">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
