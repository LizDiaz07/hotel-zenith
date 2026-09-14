import { Link } from "react-router-dom";

interface ImageCtaSectionProps {
  title: string;
  backgroundImage: string;
  ctaLabel: string;
  ctaTo: string;
}

export default function ImageCtaSection({
  title,
  backgroundImage,
  ctaLabel,
  ctaTo,
}: ImageCtaSectionProps) {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] w-full flex items-center justify-center text-center">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="font-['Playfair_Display'] font-semibold text-white text-[32px] md:text-[48px] leading-tight mb-8">
          {title}
        </h2>
        <Link
          to={ctaTo}
          className="inline-block cursor-pointer border-none bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm px-8 py-4 rounded-full uppercase tracking-wide"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}