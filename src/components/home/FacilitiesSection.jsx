import Link from "next/link";
import {
  Wifi,
  Coffee,
  ConciergeBell,
  Wind,
  CarFront,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Wifi,
    title: "Stay Connected",
    text: "Complimentary Wi-Fi to help you stay in touch.",
  },
  {
    icon: Coffee,
    title: "Tea & Coffee",
    text: "A comforting pause whenever you need one.",
  },
  {
    icon: ConciergeBell,
    title: "Warm Hospitality",
    text: "A welcoming team to help make your stay easier.",
  },
  {
    icon: Wind,
    title: "Air-Conditioned Comfort",
    text: "A comfortable room to return to after the day.",
  },
  {
    icon: CarFront,
    title: "Parking",
    text: "Parking information can be confirmed with the hotel.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Details",
    text: "Simple comforts designed around your stay.",
  },
];

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="bg-teal px-6 py-24 text-ivory sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="MADE FOR YOUR COMFORT"
            title="The little things matter."
            description="A considered collection of comforts and services to help you feel settled from the moment you arrive."
          />
          <Link
            href="/facilities"
            className="inline-flex items-center gap-3 self-start border-b border-gold/60 pb-3 text-[10px] font-semibold tracking-[.2em] text-gold transition hover:gap-5"
          >
            VIEW FACILITIES <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="bg-teal px-7 py-9 transition duration-300 hover:bg-white/[.04] sm:px-9"
            >
              <span className="mb-8 flex h-12 w-12 items-center justify-center border border-gold/50 text-gold">
                <Icon size={21} strokeWidth={1.3} />
              </span>
              <p className="mb-3 font-serif text-2xl">{title}</p>
              <p className="max-w-xs text-sm leading-6 text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
