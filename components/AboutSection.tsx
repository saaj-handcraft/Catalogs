import Link from "next/link";
import { site } from "@/data/site";

interface AboutSectionProps {
  compact?: boolean;
}

export function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <section className={`about-band${compact ? " about-band-compact" : " section"}`} aria-labelledby="about-heading">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">A little about us</p>
          <h2 id="about-heading">Made slowly.<br />Meant to be kept.</h2>
        </div>
        <div className="about-copy">
          <p>{site.story}</p>
          <ul className="value-list">
            {site.values.map((value) => <li key={value}>{value}</li>)}
          </ul>
          {compact && <Link className="text-link" href="/about/">Read Sajira&apos;s story <span aria-hidden="true">↗</span></Link>}
        </div>
      </div>
    </section>
  );
}