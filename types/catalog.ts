import type { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  collection: string;
  price?: string;
  availability?: string;
  slug?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  slug?: string;
}

export interface SiteContact {
  instagramUrl?: string;
  email?: string;
  whatsappUrl?: string;
  location?: string;
}

export interface HeroSlide {
  id: string;
  image: string | StaticImageData;
  imageAlt: string;
  href?: string;
  linkLabel?: string;
}