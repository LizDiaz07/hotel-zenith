interface HistorySectionProps {
  title: string;
  paragraphs: string[];
  image: string;
}

export default function HistorySection({ title, paragraphs, image }: HistorySectionProps) {
  return (
    <section className="bg-[#F2F1EE] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <img
          src={image}
          alt=""
          className="w-full lg:w-1/2 rounded-2xl object-cover aspect-[4/3]"
        />

        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 bg-[#1B236E] rounded-full flex-shrink-0" />
            <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px]">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}