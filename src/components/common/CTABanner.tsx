interface CTABannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;  
}

export default function CTABanner({ eyebrow, title, subtitle }: CTABannerProps) {
  return (
    <section className="bg-[#1B236E] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="font-['Poppins'] font-normal text-white text-base md:text-lg mb-2 opacity-90">
            {eyebrow}
          </p>
        )}
        <h2 className="font-['Playfair_Display'] font-semibold text-white text-3xl md:text-[42px] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-['Poppins'] font-normal text-white/80 text-base md:text-lg mt-3 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}