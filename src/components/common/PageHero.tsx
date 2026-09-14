interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function PageHero({
  title,
  description,
  backgroundImage,
  ctaLabel = "Reservar ahora",
  ctaHref,
  onCtaClick,
}: PageHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h1 className="font-['Playfair_Display'] font-semibold text-white text-[40px] md:text-[64px] leading-tight mb-4">
          {title}
        </h1>
        {description && (
        <p className="font-['Poppins'] font-normal text-white/90 text-base md:text-lg max-w-2xl mb-8">
          {description}
        </p>
        )}
        {ctaHref ? (
          
            <a href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block cursor-pointer border-none bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm md:text-base px-8 py-4 rounded-full"
          >
            {ctaLabel}
          </a>
        ) : onCtaClick ? (
        <button
          onClick={onCtaClick}
          className="cursor-pointer border-none bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm md:text-base px-8 py-4 rounded-full"
        >
          {ctaLabel}
          </button>
            ) : null}
      </div>
    </section>
  );
}