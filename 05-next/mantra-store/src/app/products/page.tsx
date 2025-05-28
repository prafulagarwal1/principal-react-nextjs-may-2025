import { dehydrate, QueryClient } from "@tanstack/react-query";
import HydrateClient from "@/components/lib/react-query/hydrate-client";

import ProductsList from "@/components/products-list/products-list";

// Lab guide
// import { getProducts } from "@/data/services/products";

import type { IProduct } from "@/types/Product";
import { notFound } from "next/navigation";

export const metadata = {
    title: "List of products",
    description: "Mantra Store - search through our variety of products.",
};

type GetProductsResponse = {
    count: number;
    page: number;
    products: IProduct[];
};

const getProducts = async (fetchPage : number) => {
    const response = await fetch( `${process.env.NEXT_PUBLIC_STORE_API_URL}/api/products?page=${fetchPage}`,
        /*
        {
            cache: 'force-cache'
        }
        */
    );

    console.log(`Making call in the backend to ${process.env.NEXT_PUBLIC_STORE_API_URL}`);

    const {
        count,
        page,
        products
    } : GetProductsResponse = await response.json();

    // fetch API does not throw error on 404 response. So we need to check for success, and throw an error explicitly if not success.
    if ( !response.ok ) {
        throw new Error( 'Unable to fetch products' );
    }

    return {
        count,
        page,
        products
    };
}

// By default a page is rendered using SSG (we see later how to switch to SSR when using DB calls in place of external API calls using fetch())
export default async function ProductsPage() {
    try {
        // SSG with React Query hydration
        const queryClient = new QueryClient();

        // --- Lab guide ---
        // const {
        //     count,
        //     page,
        //     products
        // } : GetProductsResponse = await getProducts();

        // Preload the page=1 data into React Query's cache
        await queryClient.prefetchQuery({
            queryKey: ["products", 1],
            queryFn: () => getProducts(1),
        });

        // --- Not Lab guide (alternative code) ---
        const {
            count,
            page,
            products
        } : GetProductsResponse = await getProducts(1);

        // serialize the TanStack cache to pass it to the frontend
        const dehydratedState = dehydrate(queryClient);

        return (
            <HydrateClient state={dehydratedState}>
                <ProductsList count={count} page={page} products={products} />
            </HydrateClient>
        );
    } catch( error ) {
        console.log( (error as Error).message );
        // return <div>Failed to load products. Please try again later.</div>;

        throw new Error("Failed to load products. Please try again later.");

        // return notFound();
    }
}