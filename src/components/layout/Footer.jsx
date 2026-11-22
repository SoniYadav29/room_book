import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#10242B] text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_.8fr_1fr] lg:px-16 lg:py-20">
        <div>
          <Link href="/" className="font-serif text-4xl tracking-[.16em] text-gold">MONTARA</Link>
          <p className="mt-2 text-[9px] tracking-[.42em] text-white/50">LUXURY STAYS</p>
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">A welcoming place to pause, recharge and make the most of every stay. Thoughtful comfort, warm hospitality and moments worth remembering.</p>
          <div className="mt-7 flex gap-3">
            <a href="#top" aria-label="Instagram" className="rounded-full border border-white/20 p-3 text-gold transition hover:border-gold"><Instagram size={16}/></a>
            <a href="#top" aria-label="Facebook" className="rounded-full border border-white/20 p-3 text-gold transition hover:border-gold"><Facebook size={16}/></a>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.3em] text-gold">Explore</p>
          <div className="mt-6 flex flex-col gap-4">
            {navLinks.map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-gold">{item.label}</Link>)}
            <Link href="/booking" className="text-sm text-white/65 transition hover:text-gold">Reservations</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.3em] text-gold">Get in touch</p>
          <div className="mt-6 space-y-5 text-sm text-white/65">
            <p className="flex gap-3"><MapPin className="shrink-0 text-gold" size={17}/>{siteConfig.address}</p>
            <p className="flex gap-3"><Phone className="shrink-0 text-gold" size={17}/>{siteConfig.phone}</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-gold" size={17}/>{siteConfig.email}</p>
          </div>
          <p className="mt-5 text-xs leading-6 text-white/35">Contact details are placeholders. Replace them with client-approved information before launch.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-[10px] tracking-wider text-white/40">© {new Date().getFullYear()} MONTARA. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}
