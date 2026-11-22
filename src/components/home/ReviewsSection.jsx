import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#F0E9DC] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="HOSPITALITY IS PERSONAL" title="Your experience matters." description="Every visit is an opportunity for us to make someone feel welcome. We look forward to hearing about your time at Montara."/>
        <div className="relative border border-gold/80 bg-ivory px-8 py-10 sm:px-14 sm:py-14">
          <Quote className="mb-6 text-copper" size={34} strokeWidth={1}/>
          <p className="font-serif text-3xl leading-snug text-teal sm:text-4xl">“The best stays are remembered for how they made you feel.”</p>
          <p className="mt-6 text-[10px] uppercase tracking-[.25em] text-ink/45">THE MONTARA APPROACH</p>
          <p className="mt-8 border-t border-teal/10 pt-5 text-xs leading-6 text-ink/55">Guest testimonials and public ratings will be added here once verified feedback is supplied by the hotel. No guest reviews or ratings have been invented for this preview.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[.2em] text-copper">GET IN TOUCH <ArrowUpRight size={14}/></Link>
        </div>
      </div>
    </section>
  );
}
