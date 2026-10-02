import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/data/site";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const shopLinks = [
  { href: "/categories/", label: "Categories" },
  { href: "/products/", label: "Products" },
  { href: "/collections/", label: "Collections" },
];

const companyLinks = [
  { href: "/about/", label: "Our story" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  const { instagramUrl, email, whatsappUrl, location } = site.contact;
  const hasContact = instagramUrl || email || whatsappUrl || location;

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-col footer-brand-col">
          <Link href="/" className="footer-brand">
            {site.name}
          </Link>
          <p>{site.description}</p>
          {(instagramUrl || email || whatsappUrl) && (
            <div className="footer-social" aria-label="Social links">
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Saaj on Instagram">
                  <InstagramIcon size={18} />
                </a>
              )}
              {email && (
                <a href={`mailto:${email.replace(/^mailto:/, "")}`} aria-label="Email Saaj">
                  <Mail aria-hidden="true" size={18} />
                </a>
              )}
              {whatsappUrl && (
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Message Saaj on WhatsApp">
                  <MessageCircle aria-hidden="true" size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Shop</h3>
          <nav aria-label="Shop footer navigation">
            {shopLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <nav aria-label="Company footer navigation">
            {companyLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in touch</h3>
          {hasContact ? (
            <ul className="footer-contact">
              {email && (
                <li>
                  <Mail aria-hidden="true" size={16} />
                  <a href={`mailto:${email.replace(/^mailto:/, "")}`}>{email.replace(/^mailto:/, "")}</a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <MessageCircle aria-hidden="true" size={16} />
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    WhatsApp us
                  </a>
                </li>
              )}
              {location && (
                <li>
                  <MapPin aria-hidden="true" size={16} />
                  <span>{location}</span>
                </li>
              )}
            </ul>
          ) : (
            <p>Contact links coming soon</p>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Made to be cherished</span>
      </div>
    </footer>
  );
}
