import { useRef, useState } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureIconGridProps {
  title?: string;
  features: Feature[];
}

export default function FeatureIconGrid({ title, features }: FeatureIconGridProps) {
  const isOdd = features.length % 2 !== 0;

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

  const FeatureCard = ({ feature }: { feature: Feature }) => (
    // 👇 h-full + flex-col: la tarjeta llena toda la altura disponible de su celda
    <div className="h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
      <div className="w-16 h-16 rounded-full bg-[#E9EAF5] flex items-center justify-center mb-5 flex-shrink-0">
        <img src={feature.icon} alt="" className="w-7 h-7" />
      </div>
      <h3 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-2xl mb-2">
        {feature.title}
      </h3>
      {/* 👇 flex-1 empuja el contenido y mantiene el bloque de texto centrado 
             verticalmente sin importar cuántas líneas ocupe */}
      <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm md:text-base flex-1 flex items-center">
        {feature.description}
      </p>
    </div>
  );

  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {title && (
          <div className="text-center mb-10">
            <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-3">
              {title}
            </h2>
            <div className="w-16 h-1 bg-[#1B236E] mx-auto rounded-full" />
          </div>
        )}

        {/* Carrusel: solo mobile (< sm) */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {features.map((feature, i) => (
              <div key={i} className="w-[85%] flex-shrink-0 snap-center">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, i) => (
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

        {/* Grid: sm y superior — items-stretch (default de grid) hace que todas las celdas midan igual */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.map((feature, i) => {
            const isLast = i === features.length - 1;
            const shouldCenter = isOdd && isLast;

            return (
              <div
                key={i}
                className={
                  shouldCenter
                    ? "col-span-2 max-w-[calc(50%-0.75rem)] mx-auto lg:col-span-1 lg:max-w-none lg:mx-0"
                    : ""
                }
              >
                <FeatureCard feature={feature} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}