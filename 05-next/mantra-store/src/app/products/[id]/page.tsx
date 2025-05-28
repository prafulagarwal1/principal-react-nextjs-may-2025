// import { getProductById, getProductIds } from "@/data/services/products";

import ProductDetail from "@/components/product-detail/product-detail";
import type { IProduct, IReview } from "@/types/Product";
import type { Metadata } from "next";

type Props = {
    params: { id: string };
};

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

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params; // app/products/[id]/[action] -> { id: 'dswkjd2', action: 'edit' }

    const product: IProduct = await getProductById(id);

    return <ProductDetail productId={id} product={product} />;
}