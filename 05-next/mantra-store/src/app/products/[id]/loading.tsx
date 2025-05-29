// backend will stream this loading page, while the product detail page is being constructed
// The Page component is wrapped in like this (where ProductDetailPage is lazily loaded) - <Suspense fallback={<Loading />}><ProductDetailPage /><Suspense>
// It uses this Loading component as a
export default function Loading() {
    return <p>Loading product...</p>;
}