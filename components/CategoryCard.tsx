import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/catalog";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="category-card">
      <Link href={`/categories/${category.slug}/`} aria-label={`Browse ${category.name}`}>
        <div className="category-image">
          <Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 680px) 48vw, 31vw" unoptimized />
        </div>
        <h3>{category.name}</h3>
      </Link>
    </article>
  );
}