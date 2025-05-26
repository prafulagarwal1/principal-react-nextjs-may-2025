import ProductsList from "@/components/products-list/products-list";

export const metadata = {
    title: "List of products",
    description: "Mantra Store - search through our variety of products.",
};

export default function ProductsPage() {
    return <ProductsList />;
}