import type { SiteContact } from "@/types/catalog";
import type { HeroSlide } from "@/types/catalog";
import welcomeImage from "@/images/WelcomeImage.webp";
import diwaliImage from "@/images/DiwaliCollectionImage.webp";

export const site = {
  name: "Saaj",
  description:
    "Handmade pieces for festive moments, meaningful gifts, and everyday rituals.",
  contact: {
    instagramUrl: "https://www.instagram.com/saaj.handcrafts/",
    email: "mailto:saaj.handcrafts@gmail.com",
    whatsappUrl: "https://wa.me/919999999999",
    location: undefined,
  } satisfies SiteContact,
  story:
    "Saaj brings together handmade pieces inspired by color, celebration, and the small details that make a moment feel personal. Each collection is presented with care, leaving room for the maker's story and the character of the craft to shine.",
  values: ["Made with care", "Inspired by celebration", "Chosen to be cherished"],
};

export const heroSlides: HeroSlide[] = [
  {
    id: "welcome",
    image: welcomeImage,
    imageAlt: "Saaj handcrafts displayed in a colorful festive home setting",
  },
  {
    id: "diwali-collection",
    image: diwaliImage,
    imageAlt: "Handmade statement earrings arranged for a festive collection",
  },
  {
    id: "celebration-details",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=2200&q=90",
    imageAlt: "Warm lights and handcrafted details arranged for a celebration",
  },
];