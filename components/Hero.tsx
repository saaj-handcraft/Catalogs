"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);

    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || heroSlides.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  function changeSlide(offset: number) {
    setActiveIndex((index) => (index + offset + heroSlides.length) % heroSlides.length);
  }

  const image = (
    <Image
      key={activeSlide.id}
      className="hero-slide-image"
      src={activeSlide.image}
      alt={activeSlide.imageAlt}
      fill
      priority={activeIndex === 0}
      sizes="100vw"
      unoptimized
    />
  );

  return (
    <section
      className="hero-carousel"
      aria-label="Saaj featured handcrafts"
      aria-roledescription="carousel"
    >
      <div className="hero-slide" role="group" aria-roledescription="slide" aria-label={`${activeIndex + 1} of ${heroSlides.length}`}>
        {activeSlide.href
          ? <Link className="hero-slide-link" href={activeSlide.href} aria-label={activeSlide.linkLabel ?? activeSlide.imageAlt}>{image}</Link>
          : image}
      </div>
      <div className="hero-controls" aria-label="Carousel controls">
        <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={() => changeSlide(-1)}>‹</button>
        <button type="button" className="hero-arrow" aria-label="Next slide" onClick={() => changeSlide(1)}>›</button>
      </div>
      <div className="hero-pagination" aria-label="Choose a slide">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-dot${index === activeIndex ? " is-active" : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Slide {activeIndex + 1} of {heroSlides.length}</p>
    </section>
  );
}