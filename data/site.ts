import type { SiteContact } from "@/types/catalog";

export const site = {
  name: "Saaj",
  description:
    "Handmade pieces for festive moments, meaningful gifts, and everyday rituals.",
  contact: {
    instagramUrl: undefined,
    email: undefined,
    whatsappUrl: undefined,
    location: undefined,
  } satisfies SiteContact,
  story:
    "Saaj brings together handmade pieces inspired by color, celebration, and the small details that make a moment feel personal. Each collection is presented with care, leaving room for the maker's story and the character of the craft to shine.",
  values: ["Made with care", "Inspired by celebration", "Chosen to be cherished"],
};