import type { Collection } from "@/types/catalog";

const collectionImage = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=85`;

export const collections: Collection[] = [
  { id: "festive", name: "Festive", description: "Colorful details for joyful occasions.", image: collectionImage("photo-1514525253161-7a46d19cd819"), imageAlt: "Festive gathering with warm lights" },
  { id: "navratri", name: "Navratri", description: "Pieces for nine nights of music and movement.", image: collectionImage("photo-1533174072545-7a4b6ad7a6c3"), imageAlt: "Colorful lights at a night celebration" },
  { id: "diwali", name: "Diwali", description: "Thoughtful accents for the festival of lights.", image: collectionImage("photo-1603006905003-be475563bc59"), imageAlt: "Warm candlelight for a festive evening" },
  { id: "christmas", name: "Christmas", description: "Gifts and details for a season of giving.", image: collectionImage("photo-1512389142860-9c449e58a543"), imageAlt: "Seasonal holiday decorations" },
  { id: "new-year", name: "New Year", description: "A fresh start with a little sparkle.", image: collectionImage("photo-1492684223066-81342ee5ff30"), imageAlt: "Celebration lights in a city at night" },
  { id: "chhath", name: "Chhath", description: "A collection for meaningful seasonal gatherings.", image: collectionImage("photo-1500530855697-b586d89ba3ee"), imageAlt: "Sunset over a calm landscape" },
  { id: "wedding", name: "Wedding", description: "Finishing touches for celebrations and ceremonies.", image: collectionImage("photo-1519741497674-611481863552"), imageAlt: "Wedding flowers arranged for a celebration" },
  { id: "hair-accessories", name: "Hair Accessories", description: "Handmade details for everyday and occasion looks.", image: collectionImage("photo-1529139574466-a303027c1d8b"), imageAlt: "Fashion portrait featuring a styled outfit" },
  { id: "gifts", name: "Gifts", description: "Small, considered pieces to share with someone.", image: collectionImage("photo-1513201099705-a9746e1e201f"), imageAlt: "Gift box tied with a ribbon" },
  { id: "home-decor", name: "Home Decor", description: "Handmade accents for a welcoming space.", image: collectionImage("photo-1600210492486-724fe5c67fb0"), imageAlt: "Warmly styled contemporary living room" },
];