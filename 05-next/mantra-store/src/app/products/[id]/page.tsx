// import { getProductById } from "@/data/services/products";
import type { IProduct, IReview } from "@/types/Product";
import { notFound } from "next/navigation";
import ProductReviews from "@/components/product-detail/product-reviews/product-reviews";

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

// in case of ISR (revalidate is exported), it runs periodically
// in case product is not one of them generated at build-time, this function runs at request time! In case such a product exists, the page is shown, else not found page is shown
export default async function ProductReviewsPage({ params }: Props) {
    const { id } = await params;

    let product : IProduct | null = null;

    try {
        product  = await getProductById(id);
    } catch( error ) {
        console.log( error );

        if (!product) {
            return notFound();
        }
    }

    return <ProductReviews />;
}