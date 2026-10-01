import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { CollectionGrid } from "@/components/CollectionGrid";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { collections } from "@/data/collections";
import { categories } from "@/data/categories";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section" aria-labelledby="featured-categories">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Explore Saaj</p><h2 id="featured-categories">Browse by category</h2></div>
            <Link className="text-link" href="/categories/">See all categories <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-category-grid">
            <CategoryGrid categories={categories} />
          </div>
        </div>
      </section>
      <section className="collection-band section" aria-labelledby="featured-collections">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Saaj Collections</p><h2 id="featured-collections">Find your kind of celebration</h2></div>
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