import type { Metadata } from "next";
import { CategoryGrid } from "@/components/CategoryGrid";
import { categories } from "@/data/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Saaj's handmade torans, wall hangings, rangoli, mats, candle holders, and table runners.",
};

export default function CategoriesPage() {
  return (
      <section className="page-intro section" aria-labelledby="categories-title">
          <div className="container">
        <Link className="text-link category-back-link" href="/">← Home</Link>
        <p className="eyebrow">Find your favorite craft</p>
        <h1 id="categories-title">Shop by category</h1>
        <p className="page-lede">Explore handmade accents for celebrations, thoughtful gifts, and welcoming spaces.</p>
        <div className="category-index-grid">
          <CategoryGrid categories={categories} />
        </div>
      </div>
    </section>
  );
}