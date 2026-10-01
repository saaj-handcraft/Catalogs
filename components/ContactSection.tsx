import { site } from "@/data/site";

interface ContactSectionProps {
  compact?: boolean;
}

export function ContactSection({ compact = false }: ContactSectionProps) {
  const { instagramUrl, email, whatsappUrl, location } = site.contact;
  const hasContact = instagramUrl || email || whatsappUrl || location;

  return (
    <section className={`contact-band${compact ? " contact-band-compact" : " section"}`} aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Stay in touch</p>
          <h2 id="contact-heading">A note from you<br />would make our day.</h2>
        </div>
        <div className="contact-links">
          {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>}
          {email && <a href={`mailto:${email}`}>Email Sajira <span aria-hidden="true">↗</span></a>}
          {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>}
          {location && <p>{location}</p>}
          {!hasContact && <p>Contact details will be added here soon.</p>}
        </div>
      </div>
    </section>
  );
}