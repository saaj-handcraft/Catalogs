import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { CollectionGrid } from "@/components/CollectionGrid";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section" aria-labelledby="featured-products">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">A few favorites</p><h2 id="featured-products">Made for moments worth keeping</h2></div>
            <Link className="text-link" href="/products/">See all products <span aria-hidden="true">↗</span></Link>
          </div>
          <ProductGrid products={products.slice(0, 3)} />
        </div>
      </section>
      <section className="collection-band section" aria-labelledby="featured-collections">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Gathered by occasion</p><h2 id="featured-collections">Find your kind of celebration</h2></div>
            <Link className="text-link" href="/collections/">Browse collections <span aria-hidden="true">↗</span></Link>
          </div>
          <CollectionGrid collections={collections.slice(0, 4)} />
        </div>
      </section>
      <AboutSection compact />
      <ContactSection compact />
    </>
  );
}