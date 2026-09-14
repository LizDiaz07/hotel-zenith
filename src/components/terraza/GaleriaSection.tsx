import { useRef, useState } from "react";

interface GaleriaSectionProps {
  eyebrow?: string;
  title: string;
  images: string[];
  layout?: "split" | "asymmetric" | "grid";
}

export default function GaleriaSection({
  eyebrow,
  title,
  images,
  layout = "split",
}: GaleriaSectionProps) {
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

  const goPrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const goNext = () => scrollToIndex(Math.min(activeIndex + 1, images.length - 1));

  return (
    <section className="bg-[#F2F1EE] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">

          {eyebrow && (
  <p className="font-['Poppins'] font-normal text-[#1B236E] text-sm tracking-[2px] uppercase mb-2">
    {eyebrow}
  </p>
)}

          <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px]">
            {title}
          </h2>
        </div>

        {/* Carrusel: mobile/tablet — igual para ambos layouts */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-full flex-shrink-0 snap-center rounded-2xl object-cover aspect-[4/3]"
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Anterior"
              className="cursor-pointer w-10 h-10 rounded-full border border-[#1B236E] flex items-center justify-center text-[#1B236E] disabled:opacity-30 transition-opacity"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                    i === activeIndex ? "bg-[#1B236E]" : "bg-[#1B236E]/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              disabled={activeIndex === images.length - 1}
              aria-label="Siguiente"
              className="cursor-pointer w-10 h-10 rounded-full border border-[#1B236E] flex items-center justify-center text-[#1B236E] disabled:opacity-30 transition-opacity"
            >
              ›
            </button>
          </div>
        </div>

        {/* Desktop — layout "split" (usado en Terraza): grande / apiladas / grande */}
        {layout === "split" && (
          <div className="hidden lg:grid grid-cols-3 gap-4">
            <img src={images[0]} alt="" className="w-full h-full min-h-[420px] rounded-2xl object-cover" />
            <div className="flex flex-col gap-4">
              <img src={images[1]} alt="" className="w-full h-[200px] rounded-2xl object-cover" />
              <img src={images[2]} alt="" className="w-full h-[200px] rounded-2xl object-cover" />
            </div>
            <img src={images[3]} alt="" className="w-full h-full min-h-[420px] rounded-2xl object-cover" />
          </div>
        )}

        {/* Desktop — layout "asymmetric" (Salas de Reuniones): alta izq / ancha + 2 chicas der */}
        {layout === "asymmetric" && (
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <img src={images[0]} alt="" className="w-full h-full min-h-[420px] rounded-2xl object-cover" />
            <div className="flex flex-col gap-4">
              <img src={images[1]} alt="" className="w-full h-[280px] rounded-2xl object-cover" />
              <div className="flex gap-4">
                <img src={images[2]} alt="" className="w-1/2 h-[280px] rounded-2xl object-cover" />
                <img src={images[3]} alt="" className="w-1/2 h-[280px] rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        )}

        {layout === "grid" && (
  <div className="hidden lg:grid grid-cols-3 gap-4">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt=""
        className="w-full h-[280px] rounded-2xl object-cover"
      />
    ))}
  </div>
)}
      </div>
    </section>
  );
}