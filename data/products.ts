import type { Product } from "@/types/catalog";

const demoImage = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=85`;

export const products: Product[] = [
  {
    id: "marigold-tassel",
    name: "Marigold Tassel Earrings",
    description: "A bright, celebratory accent for festive dressing and thoughtful gifting.",
    image: demoImage("photo-1617038220319-276d3cfab638"),
    imageAlt: "Gold-toned handcrafted earrings displayed against a warm background",
    category: "Accessories",
    collection: "Festive",
    slug: "marigold-tassel",
  },
  {
    id: "rangoli-studs",
    name: "Rangoli Stud Earrings",
    description: "A small statement inspired by the colors and shapes of celebration.",
    image: demoImage("photo-1535632066927-ab7c9ab60908"),
    imageAlt: "Decorative earrings arranged as a handmade jewelry set",
    category: "Accessories",
    collection: "Diwali",
  },
  {
    id: "sunlit-pendant",
    name: "Sunlit Pendant",
    description: "An easy-to-wear piece with a warm, occasion-ready finish.",
    image: demoImage("photo-1599643478518-a784e5dc4c8f"),
    imageAlt: "Pendant necklace photographed in soft natural light",
    category: "Jewellery",
    collection: "Gifts",
    slug: "sunlit-pendant",
  },
  {
    id: "petal-hair-piece",
    name: "Petal Hair Piece",
    description: "A floral-inspired finishing touch for gatherings and special days.",
    image: demoImage("photo-1490750967868-88aa4486c946"),
    imageAlt: "Bright flowers arranged in a natural garden setting",
    category: "Hair Accessories",
    collection: "Wedding",
  },
];