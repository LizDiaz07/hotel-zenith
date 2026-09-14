import { useRef, useState } from "react";

interface ExcellenceItem {
  icon: string;
  title: string;
  description: string;
}

interface ExcellenceSectionProps {
  title: string;
  items: ExcellenceItem[];
}

export default function ExcellenceSection({ title, items }: ExcellenceSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    setActiveIndex(Math.round(scrollLeft / clientWidth));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const clientWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: index * clientWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  const ExcellenceCard = ({ item }: { item: ExcellenceItem }) => (
    <div className="h-full bg-white border-t-4 border-[#1B236E] rounded-xl p-6">
      <img src={item.icon} alt="" className="w-6 h-6 mb-4" />
      <h3 className="font-['Poppins'] font-bold text-[#1C1B1B] text-base mb-2">
        {item.title}
      </h3>
      <p className="font-['Poppins'] font-normal text-[#1C1B1B]/60 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );

  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#1B236E] text-[28px] md:text-[40px] text-center mb-10">
          {title}
        </h2>

        {/* Carrusel: solo mobile (< sm) */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((item, i) => (
              <div key={i} className="w-[85%] flex-shrink-0 snap-center">
                <ExcellenceCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir a la tarjeta ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  i === activeIndex ? "bg-[#1B236E]" : "bg-[#1B236E]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid: sm y superior — 2 columnas en tablet, 4 en desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {items.map((item, i) => (
            <ExcellenceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}