import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  "/images/room1.png",
  "/images/room2.png",
  "/images/room2.png",
  "/images/room2.png",
  "/images/room2.png",
  "/images/stairs.png",
  "/images/balcony.png",
];

const captions = [
  "A place to unwind",
  "Thoughtful interiors",
  "Comfort in every detail",
  "Designed for your stay",
  "Quiet luxury",
  "Architectural details",
  "A breath of fresh air",
];

export default function GalleryPreview() {
  return (
    <section className="gallery-section relative overflow-hidden bg-[#F5F1E9] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#B77A50]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#174C48]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-16">
          <div className="gallery-heading">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B77A50]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] text-[#A16D4D]">
                DISCOVER MONTARA
              </span>
            </div>

            <SectionHeading
              // eyebrow="A GLIMPSE OF MONTARA"
              title="Spaces made for slowing down."
              description="Explore the atmosphere, the details and the spaces that make a stay feel special."
            />
          </div>

          <Link
            href="/gallery"
            className="gallery-view-link group inline-flex w-fit items-center gap-4 border-b border-[#B77A50]/50 pb-3 text-[10px] font-semibold tracking-[0.2em] text-[#174C48] transition-colors hover:border-[#174C48]"
          >
            EXPLORE ALL IMAGES
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#174C48]/20 transition-all duration-500 group-hover:-rotate-45 group-hover:bg-[#174C48] group-hover:text-white">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        {/* Editorial Gallery */}
        <div className="gallery-grid grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {images.map((image, i) => (
            <Link
              href="/gallery"
              key={`${image}-${i}`}
              className={`gallery-card gallery-card-${i + 1} group relative block overflow-hidden bg-[#DED8CD] ${
                i === 0
                  ? "col-span-2 aspect-[1.3/1] md:col-span-7 md:row-span-2 md:aspect-auto"
                  : "col-span-1 aspect-[0.85/1] md:col-span-5 md:aspect-auto"
              }`}
              style={{
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* Image */}
              <img
                src={image}
                alt={captions[i]}
                loading="lazy"
                className="gallery-image absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D2B]/80 via-[#102D2B]/10 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-2 text-[9px] font-medium tracking-[0.22em] text-[#E6B995]">
                    MONTARA COLLECTION
                  </p>
                  <h3 className="font-serif text-lg text-white sm:text-xl">
                    {captions[i]}
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#174C48] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-[#C18A62] group-hover:text-white">
                  <MoveUpRight size={17} />
                </span>
              </div>

              {/* Hover border */}
              <div className="pointer-events-none absolute inset-3 border border-white/0 transition-all duration-700 group-hover:inset-5 group-hover:border-gold/80" />
            </Link>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#174C48]/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-serif text-lg italic text-[#174C48]/75">
            Every corner has a story to tell.
          </p>

          <span className="text-[9px] font-semibold tracking-[0.24em] text-[#A16D4D]">
            THE MONTARA EXPERIENCE — EST. IN EVERY DETAIL
          </span>
        </div>
      </div>
    </section>
  );
}
