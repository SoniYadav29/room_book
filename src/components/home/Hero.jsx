"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "/images/balcony.png",
    eyebrow: "WELCOME TO MONTARA",
    title: "Make Beautiful Memories With Us",
    text: "A welcoming destination designed to make your time away truly worthwhile.",
  },
  {
    image: "/images/room1.png",
    eyebrow: "WELCOME TO MONTARA",
    title: "Make Beautiful Memories With Us",
    text: "A welcoming destination designed to make your time away truly worthwhile.",
  },
  {
    image: "/images/room2.png",
    eyebrow: "WELCOME TO MONTARA",
    title: "Make Beautiful Memories With Us",
    text: "A welcoming destination designed to make your time away truly worthwhile.",
  },
  {
    image: "/images/stairs.png",
    eyebrow: "WELCOME TO MONTARA",
    title: "Make Beautiful Memories With Us",
    text: "A welcoming destination designed to make your time away truly worthwhile.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % slides.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (direction) =>
    setActive((value) => (value + direction + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section
      id="top"
      className="hero-shell relative flex min-h-[720px] h-[100svh] max-h-[1000px] items-center justify-center overflow-hidden bg-teal text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-[1400ms]  ease-in-out ${active === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={item.image}
            alt="Montara hotel room and interiors"
            className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
              active === index ? "scale-115" : "scale-100"
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,21,.68),rgba(8,18,21,.22),rgba(8,18,21,.52))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B171B]/65 via-transparent to-black/35" />

      <div className="relative z-10 mx-5 mt-16 w-full max-w-[602px] border border-gold/65 border-x border-y border-[#B77A50]/70 rounded-t-[289px] rounded-b-none bg-[#142C35]/35 px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,.28)] backdrop-blur-[5px] sm:px-14 sm:py-16 lg:px-20">
        <div className="mb-6 flex justify-center gap-2 text-gold">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="text-sm">
              ✦
            </span>
          ))}
        </div>
        <p
          key={slide.eyebrow}
          className="hero-reveal mb-5 text-[9px] font-semibold uppercase tracking-[.38em] text-gold sm:text-[10px]"
        >
          {slide.eyebrow}
        </p>
        <h1
          key={slide.title}
          className="hero-reveal font-serif text-[clamp(2.7rem,6vw,5.1rem)] leading-[1.04] tracking-[-.035em] text-white"
        >
          {slide.title}
        </h1>
        <p
          key={slide.text}
          className="hero-reveal mx-auto mt-6 max-w-[510px] text-xs leading-7 text-white/80 sm:text-sm"
        >
          {slide.text}
        </p>
        <Link
          href="/rooms"
          className="hero-reveal group mt-8 inline-flex items-center gap-3 bg-gold px-7 py-4 text-[9px] font-bold tracking-[.2em] text-teal transition duration-300 hover:bg-[#F0D9AC] sm:text-[10px]"
        >
          DISCOVER ROOMS{" "}
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 p-2 text-white/75 transition hover:scale-110 hover:text-gold sm:left-8"
      >
        <ChevronLeft size={34} strokeWidth={1} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 p-2 text-white/75 transition hover:scale-110 hover:text-gold sm:right-8"
      >
        <ChevronRight size={34} strokeWidth={1} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((item, index) => (
          <button
            key={item.eyebrow}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[3px] transition-all duration-500 ${active === index ? "w-10 bg-gold" : "w-5 bg-white/45 hover:bg-white"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-7 right-7 z-20 flex items-center gap-3 text-xs tracking-[.2em] sm:right-14 hidden md:block lg:block">
        <span className="text-gold">{String(active + 1).padStart(2, "0")}</span>
        <span className="text-white/45">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/15">
        <div key={active} className="hero-progress h-full bg-gold" />
      </div>
    </section>
  );
}
