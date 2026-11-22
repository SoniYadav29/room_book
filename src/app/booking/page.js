"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { CheckCircle2, CalendarDays, UserRound, Mail, Phone } from "lucide-react";
import { rooms, formatPrice } from "@/data/rooms";

function BookingForm() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    checkIn: params.get("checkIn") || "",
    checkOut: params.get("checkOut") || "",
    guests: params.get("guests") || "2",
    room: rooms[0].slug,
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const selectedRoom = rooms.find(room=>room.slug===form.room) || rooms[0];
  const update = (e) => setForm({...form,[e.target.name]:e.target.value});
  const submit = (e) => {
    e.preventDefault();
    if (form.checkOut <= form.checkIn) return;
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="mx-auto max-w-2xl border border-gold bg-white px-7 py-14 text-center shadow-xl sm:px-14">
      <CheckCircle2 className="mx-auto text-copper" size={48}/>
      <p className="mt-6 text-[10px] tracking-[.3em] text-copper">ENQUIRY PREVIEW</p>
      <h2 className="mt-3 font-serif text-4xl text-teal">Thank you, {form.name}.</h2>
      <p className="mt-5 text-sm leading-7 text-ink/60">Your booking enquiry preview has been completed. No reservation has been created and no payment has been taken because the backend is not connected yet.</p>
      <div className="mt-8 bg-ivory p-5 text-left text-sm leading-7 text-ink/70"><p><strong>Room:</strong> {selectedRoom.name}</p><p><strong>Dates:</strong> {form.checkIn} to {form.checkOut}</p><p><strong>Guests:</strong> {form.guests}</p><p><strong>Contact:</strong> {form.email} · {form.phone}</p></div>
      <Link href="/" className="mt-8 inline-block bg-teal px-8 py-4 text-[10px] tracking-[.2em] text-gold">BACK TO HOME</Link>
    </div>
  );

  return (
    <form onSubmit={submit} className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
      <div className="bg-white p-6 shadow-sm sm:p-10">
        <p className="text-[10px] tracking-[.3em] text-copper">YOUR DETAILS</p>
        <h2 className="mt-3 font-serif text-3xl text-teal">Plan your stay</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="field-label">Full name<input required name="name" value={form.name} onChange={update} placeholder="Your full name" className="field-input"/></label>
          <label className="field-label">Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="field-input"/></label>
          <label className="field-label">Phone number<input required type="tel" name="phone" value={form.phone} onChange={update} placeholder="Your contact number" className="field-input"/></label>
          <label className="field-label">Guests<select name="guests" value={form.guests} onChange={update} className="field-input">{[1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></label>
          <label className="field-label">Check-in<input required type="date" name="checkIn" value={form.checkIn} onChange={update} className="field-input"/></label>
          <label className="field-label">Check-out<input required type="date" min={form.checkIn} name="checkOut" value={form.checkOut} onChange={update} className="field-input"/></label>
          <label className="field-label sm:col-span-2">Choose a room<select name="room" value={form.room} onChange={update} className="field-input">{rooms.map(room=><option key={room.slug} value={room.slug}>{room.name} — {formatPrice(room.price)} / night (indicative)</option>)}</select></label>
          <label className="field-label sm:col-span-2">Special requests<textarea name="notes" value={form.notes} onChange={update} rows="4" placeholder="Let us know if you have any special requests..." className="field-input"/></label>
        </div>
        <button className="mt-8 w-full bg-teal px-6 py-5 text-[10px] font-bold tracking-[.2em] text-gold transition hover:bg-[#1D414C]">SUBMIT BOOKING ENQUIRY</button>
        <p className="mt-4 text-xs leading-6 text-ink/45">Frontend demonstration only. This form does not send information to the hotel, reserve a room or process payment.</p>
      </div>
      <aside className="h-fit border border-gold/70 bg-[#EDE6D9] p-7 sm:p-9">
        <p className="text-[10px] tracking-[.3em] text-copper">YOUR SELECTION</p>
        <img src={selectedRoom.image} alt={selectedRoom.name} className="mt-5 aspect-[1.5/1] w-full object-cover"/>
        <h3 className="mt-5 font-serif text-2xl text-teal">{selectedRoom.name}</h3>
        <p className="mt-2 text-sm text-ink/55">{selectedRoom.beds} · Up to {selectedRoom.guests} guests</p>
        <div className="mt-6 border-t border-teal/15 pt-5"><p className="text-xs text-ink/55">Indicative starting rate</p><p className="mt-1 font-serif text-3xl text-teal">{formatPrice(selectedRoom.price)}<span className="font-sans text-xs text-ink/45"> / night</span></p></div>
        <p className="mt-5 text-xs leading-6 text-ink/50">Final pricing, taxes, availability and booking conditions must be confirmed by the hotel.</p>
      </aside>
    </form>
  );
}

export default function BookingPage() {
  return <main className="min-h-screen bg-ivory px-5 pb-24 pt-36 sm:px-10"><div className="mx-auto max-w-[1180px]"><div className="mb-12 text-center"><p className="text-[10px] tracking-[.35em] text-copper">A FEW DETAILS BEFORE YOU ARRIVE</p><h1 className="mt-4 font-serif text-5xl text-teal sm:text-6xl">Make it a Montara stay.</h1><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60">Share your preferred dates and room. Our booking experience will be connected to live availability in the backend phase.</p></div><Suspense fallback={<div className="py-20 text-center">Loading booking form…</div>}><BookingForm/></Suspense></div></main>;
}
