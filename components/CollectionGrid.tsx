import type { Collection } from "@/types/catalog";
import { CollectionCard } from "@/components/CollectionCard";

interface CollectionGridProps {
  collections: Collection[];
}

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <div className="collection-grid">
      {collections.map((collection) => <CollectionCard collection={collection} key={collection.id} />)}
    </div>
  );
}