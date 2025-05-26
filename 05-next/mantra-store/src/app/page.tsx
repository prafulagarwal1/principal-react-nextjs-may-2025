// @ -> src folder
import Home from '@/components/home/home';
import type { Metadata } from "next";

// page-specific metadata
// The metadata must be named as `metadata`
export const metadata: Metadata = {
    title: "Mantra Store Home",
    description:
        "Mantra Store Home - shop from our wide variety of products. Have them delivered within 2 hours at your doorstep.",
};

// this is a server component, we can fetch data directly (DO NOT use useEffect)
export default async function HomePage() {
    // This fetch() is not the plain fetch() of Node JS - it is a wrapper around the plain fetch created by Next JS
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/data/products-images.json`,
        {
            cache: "force-cache", // this is aNext JS - customized option
        }
    );
    const images = await res.json();

    return (
      <>
        <Home images={images} />
      </>
    );
}
