// import { getProductById, getProductIds } from "@/data/services/products";

import ProductDetail from "@/components/product-detail/product-detail";
import type { IProduct, IReview } from "@/types/Product";
import type { Metadata } from "next";

type Props = {
    params: { id: string };
};

// From Mantra API server instead of DB
const getProductById = async (id: string) => {
    const req1 = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/api/products/${id}` );
    const req2 = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/api/products/${id}/reviews` );

    const [res1, res2] = await Promise.all(
        [ req1, req2 ],
    );

    // error handling not done
    // left as an exercise
    // your code...

    const [data1, data2] = await Promise.all(
        [ res1.json(), res2.json() ]
    );

    return {
        ...(data1 as IProduct),
        reviews: data2 as IReview[]
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = await getProductById(id);

    return {
        title: product?.title ?? "Product details",
        description: product?.description ?? "",
    };
}

// By default dynamic pages (with dynamic path paramter like [id] are SR rendered)
// But, Instead of SSR rendering (request time), now this dynamic page would be constructed using SSG (at build time)
// export async function generateStaticParams() {
//     const ids = await getProductIds();

//     // [ { id: '1234' }, { id: '2345' }, ... ]
//     const idsMap = ids.map((id: number | string) => ({ id: String(id) }));

//     return idsMap;
// }


type GetProductsResponse = {
    count: number;
    page: number;
    products: IProduct[];
};

// From Mantra API server instead of DB
export async function generateStaticParams() {
    const response = await fetch( `${process.env.NEXT_PUBLIC_STORE_API_URL}/api/products`);

    const { products } : GetProductsResponse = await response.json();

    // fetch API does not throw error on 404 response. So we need to check for success, and throw an error explicitly if not success.
    if ( !response.ok ) {
        throw new Error( 'Unable to fetch products' );
    }

    // [ { id: '1234' }, { id: '2345' }, ... ]
    const idsMap = products.map(product => ({ id: String(product._id) }));

    return idsMap;
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params; // app/products/[id]/[action] -> { id: 'dswkjd2', action: 'edit' }

    const product: IProduct = await getProductById(id);

    return <ProductDetail productId={id} product={product} />;
}