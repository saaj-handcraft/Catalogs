import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/categories/", label: "Categories" },
  { href: "/products/", label: "Products" },
  { href: "/collections/", label: "Collections" },
  { href: "/about/", label: "Our story" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div><Link href="/" className="footer-brand">Saaj</Link><p>Handmade, with a little extra heart.</p></div>
        <nav aria-label="Footer navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
        <div className="footer-social">
          {site.contact.instagramUrl && <a href={site.contact.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>}
          {site.contact.email && <a href={`mailto:${site.contact.email}`}>Email</a>}
          {!site.contact.instagramUrl && !site.contact.email && <span>Contact links coming soon</span>}
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Saaj</span><span>Made to be cherished</span></div>
    </footer>
  );
}