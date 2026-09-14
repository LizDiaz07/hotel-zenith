interface ContactCTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick?: () => void;
}

export default function ContactCTASection({
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
}: ContactCTASectionProps) {
  return (
    <section className="bg-[#F5F0EC] py-16 md:py-20 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-3">
          {title}
        </h2>
        <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base md:text-lg mb-8">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="cursor-pointer border-none bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm md:text-base px-8 py-4 rounded-full"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}