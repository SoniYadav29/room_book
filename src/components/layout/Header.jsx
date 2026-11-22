"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-teal/10 bg-ivory/95 text-teal shadow-[0_8px_30px_rgba(20,44,53,.08)] backdrop-blur-xl" : "bg-gradient-to-b from-black/45 to-transparent text-white"}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
        <Link href="/" className="group relative z-10 leading-none">
          <span className={`font-serif text-[27px] tracking-[.16em] text-gold`}>
            MONTARA
          </span>
          <span
            className={`mt-1.5 block text-center text-[8px] tracking-[.42em] ${scrolled ? "text-teal/65" : "text-white/75"}`}
          >
            LUXURY STAYS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] uppercase tracking-[.13em] transition-colors hover:text-gold ${scrolled ? "text-teal/80" : "text-white/90"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/booking"
            className={`group inline-flex items-center gap-2 border px-5 py-3 text-[10px] font-semibold tracking-[.2em] transition-all ${scrolled ? "border-teal bg-teal text-ivory hover:border-gold hover:bg-gold hover:text-teal" : "border-gold/90 text-gold hover:bg-gold hover:text-teal"}`}
          >
            BOOK YOUR STAY <ArrowUpRight size={14} />
          </Link>
        </div>

        <button
          className={`relative z-10 p-2 lg:hidden ${scrolled ? "text-teal" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-teal px-6 pb-8 pt-5 text-ivory shadow-2xl lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                onClick={() => setOpen(false)}
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-xs uppercase tracking-[.2em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href="/booking"
              className="mt-5 bg-gold px-5 py-4 text-center text-xs font-semibold tracking-[.2em] text-teal"
            >
              BOOK YOUR STAY
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
