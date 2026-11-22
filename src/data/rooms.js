export const rooms = [
  {
    slug: "signature-deluxe",
    name: "Deluxe Room",
    category: "Deluxe",
    price: 3200,
    guests: 2,
    beds: "King bed",
    size: "280 sq. ft.",
    image: "/images/room1.png",
    gallery: ["/images/room1.png", "/images/room2.png", "/images/stairs.png"],
    description:
      "A welcoming retreat with generous space, thoughtful details and a relaxed boutique-hotel atmosphere.",
    amenities: [
      "Air conditioning",
      "Complimentary Wi-Fi",
      "Smart television",
      "Tea & coffee",
      "Room service",
      "Ensuite bathroom",
    ],
    featured: true,
  },
  {
    slug: "premium-comfort",
    name: "Premium Room",
    category: "Premium",
    price: 3500,
    guests: 3,
    beds: "King bed + lounge",
    size: "340 sq. ft.",
    image: "/images/room2.png",
    gallery: ["/images/room1.png", "/images/room2.png"],
    description:
      "A little more room to unwind, with a comfortable sleeping area and a relaxed sitting corner.",
    amenities: [
      "Air conditioning",
      "Complimentary Wi-Fi",
      "Smart television",
      "Tea & coffee",
      "Sitting area",
      "Ensuite bathroom",
    ],
    featured: true,
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    category: "Suite",
    price: 2800,
    guests: 3,
    beds: "King bed",
    size: "420 sq. ft.",
    image: "/images/room1.png",
    gallery: ["/images/room1.png", "/images/room2.png"],
    description:
      "An elevated stay with a distinct lounge area and considered comforts for longer visits.",
    amenities: [
      "Air conditioning",
      "Complimentary Wi-Fi",
      "Smart television",
      "Tea & coffee",
      "Separate lounge",
      "Ensuite bathroom",
    ],
    featured: true,
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
