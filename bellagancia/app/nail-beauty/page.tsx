import ProductGrid from "@/components/product-grid";
import { getProductsByCategory } from "@/lib/products";

export default function NailBeautyPage() {
  const products = getProductsByCategory('nail-beauty');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-pink-100 mb-8">Nail Beauty Collection</h1>
      <p className="text-pink-200 mb-12 max-w-3xl">
        Explore our professional-grade nail care products and polishes for
        salon-quality results at home.
      </p>
      <ProductGrid products={products} />
    </div>
  );
}