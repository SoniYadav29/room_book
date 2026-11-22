import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function StorySection() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#EDE6D9] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div className="relative">
          <div className="aspect-[.92/1] border-x border-y border-[#B77A50]/70 rounded-t-[289px] rounded-b-none border border-gold p-2 overflow-hidden">
            <img
              src="/images/room1.png"
              alt="Montara signature room"
              className="h-full w-full object-cover border-x border-y border-[#B77A50]/70 rounded-t-[289px] rounded-b-none"
            />
          </div>
          <div className="absolute -bottom-7 -right-4 hidden border border-gold bg-teal px-8 py-7 text-center text-ivory sm:block">
            <span className="font-serif text-3xl text-gold">M</span>
            <span className="mt-2 block text-[8px] tracking-[.28em]">
              THE MONTARA FEELING
            </span>
          </div>
        </div>
        <div className="lg:py-8">
          <SectionHeading
            eyebrow="A WARMER KIND OF WELCOME"
            title="A place to pause, reconnect and feel at home."
            description="At Montara, we believe a memorable stay is made from more than a beautiful room. It is the feeling of being welcomed, the ease of a thoughtful space and the little details that let you settle in."
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">
            Whether you are visiting for a short break or a longer stay, our aim
            is simple: make your time with us comfortable, relaxed and worth
            remembering.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 border-b border-copper pb-3 text-[10px] font-semibold tracking-[.2em] text-teal transition hover:gap-5"
          >
            DISCOVER OUR STORY <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
