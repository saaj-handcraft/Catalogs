import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover Sajira's handmade philosophy and inspiration.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container page-heading">
        <p className="eyebrow">The thought behind Sajira</p>
        <h1>Every piece begins with a feeling.</h1>
        <p className="page-lede">A love for handmade things, joyful color, and small details that become part of a memory.</p>
      </div>
      <AboutSection />
    </div>
  );
}