"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true }
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}
