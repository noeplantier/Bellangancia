"use client";

import { Product } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="bg-black/50 border-pink-900/20">
          <CardContent className="p-4">
            <div className="relative h-[300px] mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-pink-100 mb-2">
              {product.name}
            </h3>
            <p className="text-pink-300 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-pink-100">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;