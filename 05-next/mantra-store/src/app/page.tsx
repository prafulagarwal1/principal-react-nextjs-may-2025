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

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
