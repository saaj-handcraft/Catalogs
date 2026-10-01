import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Handmade Products",
  description: "Browse Sajira's handmade accessories, gifts, and festive pieces.",
};

export default function ProductsPage() {
  return (
    <section className="page-intro section" aria-labelledby="products-title">
      <div className="container">
        <p className="eyebrow">The Sajira collection</p>
        <h1 id="products-title">Handmade pieces, chosen with care</h1>
        <p className="page-lede">Explore accessories and small details inspired by celebration, color, and thoughtful gifting.</p>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}