import Image from "next/image";
import type { Collection } from "@/types/catalog";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="collection-card">
      <div className="collection-image">
        <Image src={collection.image} alt={collection.imageAlt} fill sizes="(max-width: 680px) 48vw, (max-width: 1024px) 30vw, 22vw" unoptimized />
      </div>
      <div className="collection-copy">
        <h3>{collection.name}</h3>
        <p>{collection.description}</p>
      </div>
    </article>
  );
}