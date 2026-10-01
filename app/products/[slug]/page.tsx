import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.flatMap((product) => product.slug ? [{ slug: product.slug }] : []);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product
    ? { title: product.name, description: product.description }
    : { title: "Product not found" };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <section className="product-detail section">
      <div className="container product-detail-layout">
        <div className="detail-image">
          <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 800px) 100vw, 55vw" unoptimized priority />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.collection} · {product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.price && <p className="detail-price">{product.price}</p>}
          {product.availability && <p>{product.availability}</p>}
          <Link className="text-link" href="/products/">← Back to all products</Link>
        </div>
      </div>
    </section>
  );
}