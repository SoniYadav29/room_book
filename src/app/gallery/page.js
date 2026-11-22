"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/room1.png", label: "Signature room" },
  {
    src: "/images/room2.png",
    label: "A restful retreat",
  },
  {
    src: "/images/stairs.png",
    label: "Interior details",
  },
  {
    src: "/images/room2.png",
    label: "Relaxed living",
  },
  {
    src: "/images/balcony.png",
    label: "Warm textures",
  },
  {
    src: "/images/stairs.png",
    label: "Quiet comfort",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState(null);
  const move = (direction) =>
    setActive((value) => (value + direction + images.length) % images.length);
  return (
    <main className="min-h-screen bg-ivory px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center">
          <p className="text-[10px] tracking-[.35em] text-copper">
            A VISUAL JOURNEY
          </p>
          <h1 className="mt-4 font-serif text-5xl text-teal sm:text-7xl">
            The Montara gallery
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60">
            A glimpse of the spaces, textures and moments that shape a stay.
          </p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActive(index)}
              className="group mb-4 block w-full overflow-hidden text-left"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full transition duration-700 group-hover:scale-[1.03]"
              />
              <span className="block bg-white px-4 py-3 text-[10px] uppercase tracking-[.2em] text-teal">
                {image.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071216]/95 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close gallery"
            className="absolute right-6 top-6 text-white"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => move(-1)}
            aria-label="Previous image"
            className="absolute left-3 text-white sm:left-8"
          >
            <ChevronLeft size={36} />
          </button>
          <div className="max-h-[85vh] max-w-[1100px]">
            <img
              src={images[active].src}
              alt={images[active].label}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <p className="mt-4 text-center text-xs tracking-widest text-gold">
              {images[active].label}
            </p>
          </div>
          <button
            onClick={() => move(1)}
            aria-label="Next image"
            className="absolute right-3 text-white sm:right-8"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </main>
  );
}
