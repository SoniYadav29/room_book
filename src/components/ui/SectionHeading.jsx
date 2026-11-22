export default function SectionHeading({ eyebrow, title, description, light = false, centered = false }) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] ${light ? "text-gold" : "text-copper"}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-ivory" : "text-teal"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-xl text-sm leading-7 ${centered ? "mx-auto" : ""} ${light ? "text-white/65" : "text-ink/65"}`}>{description}</p>}
    </div>
  );
}
