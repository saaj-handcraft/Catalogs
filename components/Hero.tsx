import Image from "next/image";
import Link from "next/link";
import welcomeImage from "../images/WelcomeImage.webp";

export function Hero() {
  return (
    // <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <Image src={welcomeImage} alt="Hero image" width={1200} height={600} className="hero-image" />
      </div>
    // </section>
  );
}