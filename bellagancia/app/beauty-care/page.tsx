import ProductGrid from "@/components/product-grid";
import { getProductsByCategory } from "@/lib/products";

export default function BodyCarePage() {
  const products = getProductsByCategory('body-care');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-pink-100 mb-8">Body Care Collection</h1>
      <p className="text-pink-200 mb-12 max-w-3xl">
        Discover our premium selection of body care products designed to nourish,
        protect, and enhance your skin's natural beauty.
      </p>
      <ProductGrid products={products} />
    </div>
  );
}