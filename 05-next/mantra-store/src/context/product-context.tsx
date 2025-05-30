"use client";

import { useState, ReactNode } from "react";
import { createContext, useContext } from "react";
import { IProduct, IReview } from "@/types/Product";

export type ProductContextValue = {
    product: IProduct;
    productId: string;
    updateReviews: (reviews: IReview[]) => void;
};

export const ProductContext = createContext<ProductContextValue | null>(null);

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "useProduct must be used within <ProductContext.Provider>"
        );
    }
    return context;
};

export function ProductProvider({
    children,
    value,
}: {
    children: ReactNode;
    value: Omit<ProductContextValue, 'updateReviews'>;
}) {
    const [reviews, setReviews] = useState<IReview[]>(value.product.reviews);

    const updateReviews = (newReviews: IReview[]) => {
        setReviews(newReviews);
    };

    const valueWithUpdatedReviews = {
        ...value, // copy over current context value (productId, product etc)
        product: { // update the product with the new reviews
            ...value.product,
            reviews: reviews, // update to the latest array of reviews
        },
        updateReviews,
    };

    return <ProductContext.Provider value={valueWithUpdatedReviews}>{children}</ProductContext.Provider>;
}