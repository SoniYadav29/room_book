import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/home/RoomCard";
import { rooms } from "@/data/rooms";

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-ivory px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="STAY YOUR WAY" title="Rooms & Suites" description="Find a space that feels right for your kind of getaway. Every room is designed to make slowing down feel effortless."/>
          <Link href="/rooms" className="inline-flex items-center gap-3 self-start border-b border-copper pb-3 text-[10px] font-semibold tracking-[.2em] text-teal transition hover:gap-5 md:self-auto">EXPLORE ALL ROOMS <ArrowUpRight size={15}/></Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room)=><RoomCard key={room.slug} room={room}/>)}
        </div>
      </div>
    </section>
  );
}
