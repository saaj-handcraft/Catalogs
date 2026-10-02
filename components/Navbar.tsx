import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import logo from "../images/Logo/logo.webp";

const links = [
  { href: "/", label: "Home" },
  { href: "/products/", label: "Products" },
  { href: "/collections/", label: "Collections" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Saaj home">
          <Image src={logo} alt="Saaj logo" className="brand-logo" width={170} height={46} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}