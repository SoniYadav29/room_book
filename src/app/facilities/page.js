import { Wifi, Coffee, ConciergeBell, Wind, CarFront, Sparkles, Tv, Bath } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "Facilities | Montara" };
const features = [
  [Wifi,"Complimentary Wi-Fi","Stay connected during your visit."],
  [Coffee,"Tea & Coffee","Enjoy a comforting refreshment in your room."],
  [ConciergeBell,"Guest Assistance","A welcoming point of contact for your stay."],
  [Wind,"Air Conditioning","A comfortable indoor environment."],
  [CarFront,"Parking Information","Contact the hotel to confirm parking arrangements."],
  [Tv,"In-room Entertainment","Unwind with in-room entertainment."],
  [Bath,"Ensuite Bathroom","A private space to refresh and reset."],
  [Sparkles,"Thoughtful Housekeeping","Details that help keep your stay comfortable."]
];

export default function FacilitiesPage() {
  return <main className="bg-ivory pt-28"><section className="bg-teal px-6 py-24 text-center text-ivory"><p className="text-[10px] tracking-[.35em] text-gold">THE COMFORTS THAT COUNT</p><h1 className="mt-4 font-serif text-5xl sm:text-7xl">Facilities & comforts</h1><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">Thoughtful essentials to make your time at Montara feel easy.</p></section><section className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-16"><SectionHeading centered eyebrow="MADE FOR YOUR STAY" title="Everything in its place." description="Explore the comforts represented in this website preview. Please confirm the hotel's actual facilities before publishing."/><div className="mt-14 grid gap-px bg-teal/10 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon,title,desc])=><div key={title} className="bg-white p-8"><Icon size={26} className="text-copper" strokeWidth={1.4}/><h2 className="mt-7 font-serif text-xl text-teal">{title}</h2><p className="mt-3 text-xs leading-6 text-ink/55">{desc}</p></div>)}</div></section></main>;
}
