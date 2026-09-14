interface QuoteSectionProps {
  quote: string;
  author: string;
}

export default function QuoteSection({ quote, author }: QuoteSectionProps) {
  return (
    <section className="bg-[#1B236E] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-['Playfair_Display'] italic font-semibold text-white text-2xl md:text-[34px] leading-snug mb-6">
          «{quote}»
        </p>
        <p className="font-['Poppins'] font-normal text-white/70 text-base md:text-lg italic">
          — {author}
        </p>
      </div>
    </section>
  );
}