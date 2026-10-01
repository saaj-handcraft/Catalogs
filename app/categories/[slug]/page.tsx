import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  return category
    ? {
        title: category.name,
        description: `Explore Saaj's handmade ${category.name.toLowerCase()} collection.`,
      }
    : { title: "Category not found" };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) notFound();

  const categoryProducts = products.filter((product) => product.category === category.name);

  return (
    <section className="page-intro section" aria-labelledby="category-title">
      <div className="container">
        <Link className="text-link category-back-link" href="/">← Home</Link>
              { " "}
        <Link className="text-link category-back-link" href="/categories/">  ← All categories</Link>
        <p className="eyebrow">Saaj handmade</p>
        <h1 id="category-title">{category.name}</h1>
        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <p className="page-lede">New pieces in this category are coming soon.</p>
        )}
      </div>
    </section>
  );
}