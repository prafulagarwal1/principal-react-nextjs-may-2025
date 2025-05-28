import ProductsList from "@/components/products-list/products-list";
import { getProducts } from "@/data/services/products";
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

// By default a page is rendered using SSG (we see later how to switch to SSR when using DB calls in place of external API calls using fetch())
export default async function ProductsPage() {
    try {
        // const {
        //     count,
        //     page,
        //     products
        // } : GetProductsResponse = await getProducts();

        const response = await fetch( `${process.env.NEXT_PUBLIC_STORE_API_URL}/api/products`,
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

        return <ProductsList count={count} page={page} products={products} />;
    } catch( error ) {
        console.log( (error as Error).message );
        // return <div>Failed to load products. Please try again later.</div>;

        throw new Error("Failed to load products. Please try again later.");

        // return notFound();
    }
}