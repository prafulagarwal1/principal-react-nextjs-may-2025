import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

export const useProducts = (page: number = 1) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => getProducts(page),
        staleTime: 1000 * 60 * 5, // Optional: 5 minutes cache
    });
};