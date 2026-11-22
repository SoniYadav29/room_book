# MONTARA — Luxury Boutique Hotel Website

A complete frontend-first hotel website built with Next.js App Router, JavaScript, Tailwind CSS v4, GSAP and Lucide React.

## Requirements
- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## What's included
- Cinematic four-slide hero carousel with autoplay and manual controls
- Responsive navigation and mobile menu
- Booking search bar with date/guest inputs
- Room listing, filters and individual room detail pages
- Frontend booking form and confirmation screen
- About, Facilities, Reviews, Gallery/lightbox and Contact pages/sections
- GSAP reveal animations and responsive styling
- User-provided Montara room photograph at `public/images/montara-signature-room.jpeg`

## Important: frontend prototype
This delivery intentionally does not connect to a database, payment gateway, authentication provider, email service or live availability API. Room data in `src/data/rooms.js` is demonstration content for the frontend. Booking confirmation is a client-side prototype only; it does not reserve a real room or collect payment.

Before accepting real bookings:
1. Replace demo room data with the existing Montara room API / database.
2. Connect availability search to the real availability endpoint.
3. Connect booking submission to the existing booking API.
4. Integrate Razorpay on the server using verified payment signatures.
5. Protect admin functionality using the existing authentication system.
6. Replace placeholder hotel contact details and any sample copy with client-approved information.

## Brand direction
- Deep teal: `#142C35`
- Champagne gold: `#D5B477`
- Warm ivory: `#F5F0E6`
- Copper: `#A95F35`
- Royal blue: `#253F82`

Typography uses Playfair Display for editorial headings and Inter for interface/body copy.

## Main routes
- `/` — homepage and all key marketing sections
- `/rooms` — room catalogue
- `/rooms/[slug]` — room detail
- `/booking` — frontend booking form
- `/about`
- `/facilities`
- `/gallery`
- `/contact`

All hotel content, room data, image URLs and contact placeholders are easy to edit in `src/data/` and the relevant components.
