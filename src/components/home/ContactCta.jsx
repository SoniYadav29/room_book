import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#F0E9DC] px-6 py-20 text-center sm:px-10 lg:py-28">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-2xl">
        {/* Window-style frame */}
        <div className="relative border-x border-y border-[#B77A50]/70 rounded-t-[289px] rounded-b-none px-6 pb-14 pt-24 sm:px-12 sm:pt-32 lg:pt-36">
          {/* Decorative top inner frame */}
          <div className="pointer-events-none absolute inset-x-4 top-4 bottom-0 rounded-t-[289px] rounded-b-none border-x border-t border-[#B77A50]/30" />

          {/* Content */}
          <div className="relative z-10">
            <p className="mb-5 text-[10px] font-semibold tracking-[.35em] text-[#A16D4D]">
              YOUR NEXT GETAWAY STARTS HERE
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#174C48] sm:text-6xl">
              We would love to welcome you.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#263B38]/65">
              Planning a visit or have a question? Get in touch with our team
              and let us help you plan your stay.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-flex items-center gap-3 bg-[#174C48] px-8 py-4 text-[10px] font-bold tracking-[.2em] text-[#E6B995] transition-all duration-500 hover:bg-[#1D414C] hover:gap-5"
            >
              PLAN YOUR STAY
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
