import type { Product } from "@/types/catalog";
import { ProductCard } from "@/components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  );
}