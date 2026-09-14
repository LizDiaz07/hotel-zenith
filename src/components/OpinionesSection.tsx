import { type FunctionComponent, useRef, useState } from "react";
import iconBooking from "../assets/icons/icon-booking.png";
import iconStar from "../assets/icons/icon-star.svg";

export type OpinionesSectionType = {
  className?: string;
};

const testimonios = [
  {
    name: "Elena V.",
    rating: 5,
    quote:
      "Nos encantó todo, la atención desde la recepción, el restaurante, todo el personal muy amable, la limpieza, parece un hotel nuevo, el desayuno muy rico.",
  },
  {
    name: "González",
    rating: 5,
    quote:
      "Excelente servicio, céntrico, estacionamiento privado, aire acondicionado al 100, personal super amable y ayudaron a solucionar un tema personal, siempre están serviciales, desayuno incluido 10/10, súper limpio y baño excelente.",
  },
];

const OpinionesSection: FunctionComponent<OpinionesSectionType> = ({
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  const goToTestimonio = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clampedIndex = Math.max(0, Math.min(index, testimonios.length - 1));
    el.scrollTo({ left: clampedIndex * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="opiniones"
      className={`w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <h2 className="text-[#1B236E] font-[Playfair_Display] font-bold text-[26px] sm:text-[32px] md:text-[40px] leading-tight text-center">
          Lo que dicen nuestros huéspedes
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Tarjeta Booking.com */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-[380px] lg:mx-0 shrink-0 bg-[#1B236E] rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
            <div className="bg-[#2C4CA8] rounded-xl p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-white/70 font-[Poppins] font-normal text-sm">
                  Welcome to
                </span>
                <span className="text-white font-[Poppins] font-semibold text-2xl">
                  Hotel ZENITH
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-[Poppins] font-semibold text-base">
                    Booking.com
                  </span>
                  <span className="text-white/70 font-[Poppins] font-normal text-xs">
                    Traveller Review Awards 2026
                  </span>
                </div>

                <div className="bg-[#4f6fd6] rounded-lg px-3 py-2 flex flex-col items-center">
                  <span className="text-white font-[Poppins] font-bold text-2xl leading-none">
                    9.5
                  </span>
                  <span className="text-white/80 font-[Poppins] font-normal text-[10px]">
                    out of 10
                  </span>
                </div>
              </div>
            </div>

            <span className="text-white/70 font-[Poppins] font-normal text-sm text-center">
              Basado en opiniones verificadas de huéspedes.
            </span>
            <a
              className="cursor-pointer border-none py-3 px-6 bg-white text-[#1B236E] font-[Poppins] font-semibold text-sm rounded-full hover:bg-white/90 transition-colors inline-block text-center"
              href="https://www.booking.com/hotel/mx/zenith.es-mx.html?chal_t=1788573820332&force_referer=#tab-reviews"
              target="_blank"
              rel="noopener noreferrer"
              >
              Ver más opiniones en Booking
              </a>
          </div>

          {/* Carrusel / Cuadrícula de testimonios */}
          <div className="relative flex-1">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 [&::-webkit-scrollbar]:hidden"
            >
              {testimonios.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#F0F3FA] overflow-hidden md:w-auto shadow-lg border border-gray-100/95 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-3 shrink-0 w-full sm:w-auto snap-center"
                >
                  <img src={iconBooking} alt="Booking.com" className="w-12 h-12 rounded-full object-cover" />
                  <span className="text-[#1C1B1B] font-[Poppins] font-semibold text-base">
                    {t.name}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <img key={i} src={iconStar} alt="" className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-[#1C1B1B]/70 font-[Poppins] font-normal italic text-sm leading-relaxed">
                    {t.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Flecha izquierda - solo móvil */}
            {activeIndex > 0 && (
              <button
                onClick={() => goToTestimonio(activeIndex - 1)}
                className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-[#1b236e] text-lg cursor-pointer border-none z-10"
                aria-label="Opinión anterior"
              >
                ‹
              </button>
            )}

            {/* Flecha derecha - solo móvil */}
            {activeIndex < testimonios.length - 1 && (
              <button
                onClick={() => goToTestimonio(activeIndex + 1)}
                className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-[#1b236e] text-lg cursor-pointer border-none z-10"
                aria-label="Siguiente opinión"
              >
                ›
              </button>
            )}
          </div>
        </div>

        {/* Indicador de puntos - solo móvil */}
        <div className="flex sm:hidden items-center justify-center gap-2 -mt-6">
          {testimonios.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-[#1b236e]" : "w-2 bg-[#1b236e]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionesSection;