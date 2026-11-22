import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata = { title: "About Montara" };

export default function AboutPage() {
  return (
    <main className="bg-ivory pt-28">
      <section className="bg-teal px-6 py-24 text-center text-ivory sm:px-10">
        <p className="text-[10px] tracking-[.35em] text-gold">
          THE MONTARA STORY
        </p>
        <h1 className="mt-4 font-serif text-5xl sm:text-7xl">
          Hospitality, with heart.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65">
          A welcoming place to pause, reconnect and feel at ease.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-28">
        <img
          src="/images/room1.png"
          alt="Montara room interior"
          className="aspect-[1.1/1] w-full object-cover"
        />
        <div>
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title="A stay shaped around the feeling of being welcome."
            description="We believe the most memorable hospitality feels effortless. A comfortable room, thoughtful details and a warm welcome can turn a simple visit into a meaningful pause."
          />
          <p className="mt-5 text-sm leading-7 text-ink/60">
            Montara is imagined as a relaxed boutique stay where guests can
            settle in, take a breath and enjoy the moments that matter. Our
            focus is on comfort, care and making every visit feel considered.
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-block border-b border-copper pb-3 text-[10px] tracking-[.2em] text-teal"
          >
            EXPLORE OUR ROOMS
          </Link>
        </div>
      </section>
    </main>
  );
}
