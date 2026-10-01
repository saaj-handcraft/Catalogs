import type { Metadata } from "next";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore Saaj collections for festivals, gifting, weddings, and home.",
};

export default function CollectionsPage() {
  return (
    <section className="page-intro section" aria-labelledby="collections-title">
      <div className="container">
        <p className="eyebrow">A collection for every occasion</p>
        <h1 id="collections-title">Browse by what you are celebrating</h1>
        <p className="page-lede">From festive gatherings to meaningful gifts, find a collection that feels like your moment.</p>
        <CollectionGrid collections={collections} />
      </div>
    </section>
  );
}