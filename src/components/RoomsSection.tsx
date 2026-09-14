import { type FunctionComponent, useRef, useState } from "react";
import deluxeKingImg from "../assets/habitaciones/deluxe-king.webp";
import deluxeDobleImg from "../assets/habitaciones/deluxe-doble.webp";
import iconCama from "../assets/icons/icon-cama.svg";
import iconAire from "../assets/icons/icon-aire.svg";
import iconCaja from "../assets/icons/icon-caja-seguridad.svg";
import iconPlanchado from "../assets/icons/icon-planchado.svg";
import iconSecadora from "../assets/icons/icon-secadora.svg";
import iconWifi from "../assets/icons/icon-wifi.svg";
import { Link } from 'react-router-dom'

export type RoomsSectionType = {
  className?: string;
};

type Room = {
  name: string;
  img: string;
  badge?: string;
  slug: string;
  features: { icon: string; label: string }[];
};

const rooms: Room[] = [
  {
    name: "Deluxe King",
    img: deluxeKingImg,
    badge: "MÁS SOLICITADA",
    slug: "deluxe-king", 
    features: [
    { icon: iconCama, label: "Cama King Size" },
    { icon: iconAire, label: "Aire acondicionado" },
    { icon: iconCaja, label: "Caja de Seguridad" },
    { icon: iconPlanchado, label: "Equipo de planchado" },
    { icon: iconSecadora, label: "Secadora de Cabello" },
    { icon: iconWifi, label: "WiFi" },
    ],
  },
  {
    name: "Deluxe Doble",
    img: deluxeDobleImg,
    slug: "deluxe-doble", 
    features: [
    { icon: iconCama, label: "Dos Camas Matrimoniales" },
    { icon: iconAire, label: "Aire Acondicionado" },
    { icon: iconCaja, label: "Caja de Seguridad" },
    { icon: iconPlanchado, label: "Equipo de Planchado" },
    { icon: iconSecadora, label: "Secadora de Cabello" },
    { icon: iconWifi, label: "WiFi" },
    ],
  },
];

const RoomsSection: FunctionComponent<RoomsSectionType> = ({
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (el.clientWidth * 0.85));
    setActiveIndex(index);
  };

  const goToRoom = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clampedIndex = Math.max(0, Math.min(index, rooms.length - 1));
    el.scrollTo({ left: clampedIndex * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="habitaciones"
      className={`w-full bg-[#FFFFFF] py-16 md:py-20 px-6 md:px-12 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Encabezado */}
        <div className="flex flex-col gap-2">
          <span className="text-[#1B236E] font-[Poppins] font-normal text-[16px] tracking-[2px] uppercase">
            Habitaciones
          </span>
          <h2 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight">
            Nuestras propuestas de hospedaje
          </h2>
        </div>

        {/* Carrusel / Cuadrícula de habitaciones */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 -mx-6 px-6 md:mx-0 md:px-0 pb-2 [&::-webkit-scrollbar]:hidden"
          >
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-white rounded-2xl overflow-hidden flex flex-col shrink-0 w-full md:w-auto snap-center shadow-lg border border-gray-100/80"
              >
                {/* Imagen */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-md">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="absolute inset-0 w-full h-full object-cover [image-rendering:smooth] [transform:translateZ(0)] [backface-visibility:hidden]"
                    loading="lazy"
                    
                  />
                  {room.badge && (
                    <span className="absolute top-4 left-4 bg-[#1b236e] text-white font-[Poppins] font-regular text-xs tracking-wide uppercase py-2 px-4 rounded-md">
                      {room.badge}
                    </span>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 p-6 md:p-8 flex-1">
                  <div className="flex flex-col items-start gap-5 w-fit mx-auto flex-1">
                    <h3 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-2xl md:text-3xl">
                      {room.name}
                    </h3>
                    <div className="flex flex-col items-start gap-y-3 sm:grid sm:grid-cols-2 sm:gap-x-4">
                      {room.features.map((feature) => (
                        <div key={feature.label} className="flex items-center gap-2">
                          <img src={feature.icon} alt="" className="w-5 h-5 shrink-0" />
                          <span className="text-[#1C1B1B]/80 font-[Poppins] font-normal text-sm">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* El botón se empuja hacia abajo */}
                    <Link
                      to={`/habitaciones/${room.slug}`}
                      className="mt-auto md:self-end cursor-pointer border-none py-3 px-8 bg-[#1b236e] text-white font-[Poppins] font-semibold text-sm rounded-full hover:bg-[#4f57a1] transition-colors"
                    >
                      Conócenos
                    </Link>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* Flecha izquierda - solo móvil, oculta en la primera tarjeta */}
          {activeIndex > 0 && (
            <button
              onClick={() => goToRoom(activeIndex - 1)}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-[#1b236e] text-lg cursor-pointer border-none z-10"
              aria-label="Habitación anterior"
            >
              ‹
            </button>
          )}

          {/* Flecha derecha - solo móvil, oculta en la última tarjeta */}
          {activeIndex < rooms.length - 1 && (
            <button
              onClick={() => goToRoom(activeIndex + 1)}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-[#1b236e] text-lg cursor-pointer border-none z-10"
              aria-label="Siguiente habitación"
            >
              ›
            </button>
          )}
        </div>

        {/* Indicador de puntos - solo móvil */}
        <div className="flex md:hidden items-center justify-center gap-2 -mt-4">
          {rooms.map((_, i) => (
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

export default RoomsSection;