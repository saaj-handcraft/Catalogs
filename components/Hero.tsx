import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Handmade for life&apos;s bright moments</p>
          <h1 id="hero-title">Little details.<br />Lasting joy.</h1>
          <p className="hero-intro">
            Meet Saaj: a collection of handmade accents inspired by festive color, meaningful
            gifting, and the beauty of making.
          </p>
          <Link className="button-primary" href="/products/">Explore the collection <span aria-hidden="true">↗</span></Link>
          <p className="hero-note">Thoughtful pieces, made to feel personal.</p>
        </div>
        <div className="hero-photo">
          <Image
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=90"
            alt="Gold-toned handmade earrings arranged for a festive collection"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 54vw"
            unoptimized
          />
          <div className="hero-stamp" aria-hidden="true"><span>Made</span><span>with care</span></div>
        </div>
      </div>
    </section>
  );
}