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
      <div className="product-copy">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {(product.price || product.availability) && (
          <p className="product-meta">{[product.price, product.availability].filter(Boolean).join(" · ")}</p>
        )}
        {product.slug && <span className="text-link">View piece <span aria-hidden="true">↗</span></span>}
      </div>
    </>
  );

  return product.slug
    ? <article className="product-card"><Link href={`/products/${product.slug}/`}>{content}</Link></article>
    : <article className="product-card">{content}</article>;
}