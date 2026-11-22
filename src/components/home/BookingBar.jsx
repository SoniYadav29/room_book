"use client";

import { useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingBar() {
  const router = useRouter();
  const [[today, tomorrow]] = useState(() => {
    const checkInDate = new Date();
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + 1);

    return [
      checkInDate.toISOString().slice(0, 10),
      checkOutDate.toISOString().slice(0, 10),
    ];
  });
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2");

  function submit(e) {
    e.preventDefault();
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      alert("Please choose a check-out date after your check-in date.");
      return;
    }
    router.push(
      `/booking?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`,
    );
  }

  return (
    <section
      id="booking"
      className="relative z-20 mx-auto -mt-10 w-[calc(100%-2rem)] max-w-[1120px] sm:-mt-12"
    >
      <form
        onSubmit={submit}
        className="grid gap-px bg-gold/50 p-px shadow-[0_20px_70px_rgba(20,44,53,.16)] md:grid-cols-[1fr_1fr_.8fr_auto]"
      >
        <label className="flex items-center gap-4 bg-ivory px-5 py-5">
          <CalendarDays className="shrink-0 text-copper" size={20} />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] uppercase tracking-[.2em] text-ink/55">
              Check in
            </span>
            <input
              aria-label="Check-in date"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-teal outline-none"
            />
          </span>
        </label>
        <label className="flex items-center gap-4 bg-ivory px-5 py-5">
          <CalendarDays className="shrink-0 text-copper" size={20} />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] uppercase tracking-[.2em] text-ink/55">
              Check out
            </span>
            <input
              aria-label="Check-out date"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-teal outline-none"
            />
          </span>
        </label>
        <label className="flex items-center gap-4 bg-ivory px-5 py-5">
          <Users className="shrink-0 text-copper" size={20} />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] uppercase tracking-[.2em] text-ink/55">
              Guests
            </span>
            <select
              aria-label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-1 w-full bg-transparent text-sm text-teal outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </span>
        </label>
        <button className="flex items-center justify-center gap-3 bg-teal px-8 py-5 text-[10px] font-bold tracking-[.18em] text-gold transition hover:bg-[#1D414C]">
          CHECK AVAILABILITY <Search size={16} />
        </button>
      </form>
    </section>
  );
}
