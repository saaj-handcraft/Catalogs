import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const content = (
    <>
      <div className="product-image">
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 680px) 48vw, (max-width: 1024px) 30vw, 22vw" unoptimized />
      </div>
      <h3 className="product-name">{product.name}</h3>
    </>
  );

  return product.slug
    ? <article className="product-card"><Link href={`/products/${product.slug}/`} aria-label={product.name}>{content}</Link></article>
    : <article className="product-card">{content}</article>;
}