import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Find Saaj's available social and email contact details.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container page-heading">
        <p className="eyebrow">We would love to hear from you</p>
        <h1>Let&apos;s keep in touch.</h1>
        <p className="page-lede">Follow along for new collections and handmade inspiration.</p>
      </div>
      <ContactSection />
    </div>
  );
}