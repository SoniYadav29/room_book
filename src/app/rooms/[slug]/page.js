import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { rooms, formatPrice } from "@/data/rooms";

export function generateStaticParams() { return rooms.map(room=>({slug:room.slug})); }

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = rooms.find(item=>item.slug===slug);
  if (!room) notFound();

  return (
    <main className="bg-ivory pt-28">
      <section className="mx-auto max-w-[1280px] px-6 py-12 sm:px-10 lg:px-16">
        <Link href="/rooms" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-copper"><ArrowLeft size={14}/> All rooms</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="overflow-hidden"><img src={room.image} alt={room.name} className="aspect-[1.25/1] w-full object-cover"/></div>
            <div className="mt-3 grid grid-cols-2 gap-3">{room.gallery.slice(0,2).map((img,i)=><img key={img} src={img} alt={`${room.name} view ${i+1}`} className="aspect-[1.5/1] w-full object-cover"/>)}</div>
          </div>
          <div className="lg:py-8">
            <p className="text-[10px] uppercase tracking-[.3em] text-copper">{room.category} COLLECTION</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-teal sm:text-5xl">{room.name}</h1>
            <p className="mt-6 text-sm leading-7 text-ink/65">{room.description}</p>
            <div className="mt-8 border-y border-teal/10 py-6">
              <p className="font-serif text-3xl text-teal">{formatPrice(room.price)} <span className="font-sans text-xs text-ink/45">/ night · indicative</span></p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-xs text-ink/65"><p><strong className="block text-teal">Capacity</strong>Up to {room.guests} guests</p><p><strong className="block text-teal">Bed</strong>{room.beds}</p><p><strong className="block text-teal">Room size</strong>{room.size}</p></div>
            </div>
            <h2 className="mt-8 font-serif text-2xl text-teal">Room amenities</h2>
            <div className="mt-5 grid grid-cols-2 gap-4">{room.amenities.map(item=><p key={item} className="flex items-center gap-2 text-xs text-ink/65"><Check size={14} className="text-copper"/>{item}</p>)}</div>
            <Link href="/booking" className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-teal px-6 py-5 text-[10px] font-bold tracking-[.2em] text-gold transition hover:bg-[#1D414C]">ENQUIRE / BOOK THIS ROOM <ArrowUpRight size={15}/></Link>
            <p className="mt-4 text-xs leading-6 text-ink/45">Rates and amenities are placeholders for the frontend preview and are subject to confirmation by the hotel.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
