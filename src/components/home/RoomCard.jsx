import Link from "next/link";
import { ArrowUpRight, Users, BedDouble } from "lucide-react";
import { formatPrice } from "@/data/rooms";

export default function RoomCard({ room }) {
  return (
    <article className="group bg-white">
      <Link href={`/rooms/${room.slug}`} className="relative block aspect-[1.28/1] overflow-hidden bg-sand">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
        <span className="absolute left-5 top-5 bg-ivory/95 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-teal">{room.category}</span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-teal transition duration-300 group-hover:rotate-45"><ArrowUpRight size={18}/></span>
      </Link>
      <div className="border border-teal/8 p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-serif text-2xl text-teal">{room.name}</h3>
          <p className="text-right text-sm font-semibold text-copper">{formatPrice(room.price)}<span className="block text-[9px] font-normal text-ink/45">starting / night</span></p>
        </div>
        <p className="mt-3 text-sm leading-6 text-ink/60">{room.description}</p>
        <div className="mt-5 flex flex-wrap gap-5 border-t border-teal/10 pt-5 text-[10px] uppercase tracking-wider text-ink/55">
          <span className="flex items-center gap-2"><Users size={14} className="text-copper"/> Up to {room.guests} guests</span>
          <span className="flex items-center gap-2"><BedDouble size={14} className="text-copper" />{room.beds}</span>
        </div>
      </div>
    </article>
  );
}
