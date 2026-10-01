import type { Category } from "@/types/catalog";
import { CategoryCard } from "@/components/CategoryCard";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="category-grid">
      {categories.map((category) => <CategoryCard category={category} key={category.id} />)}
    </div>
  );
}