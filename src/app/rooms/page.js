import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/home/RoomCard";
import { rooms } from "@/data/rooms";

export const metadata = { title: "Rooms & Suites | Montara" };

export default function RoomsPage() {
  return (
    <main className="pt-28">
      <section className="bg-teal px-6 py-20 text-center text-ivory sm:px-10">
        <p className="mb-4 text-[10px] tracking-[.35em] text-gold">REST, RECHARGE, REPEAT</p>
        <h1 className="font-serif text-5xl sm:text-7xl">Rooms & Suites</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">Find a space that feels right for your next stay.</p>
      </section>
      <section className="bg-ivory px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex items-center justify-between"><p className="text-xs text-ink/55">{rooms.length} room categories shown in this preview</p><Link href="/booking" className="text-[10px] font-semibold tracking-widest text-copper">CHECK DATES <ArrowUpRight className="ml-2 inline" size={14}/></Link></div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">{rooms.map(room=><RoomCard key={room.slug} room={room}/>)}</div>
          <p className="mt-10 text-xs leading-6 text-ink/45">Room categories, descriptions, capacities and prices are demonstration content. Confirm all details with the hotel before publishing or accepting bookings.</p>
        </div>
      </section>
    </main>
  );
}
