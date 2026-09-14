import { type FunctionComponent } from "react";
import iconEstacionamiento from "../assets/icons/icon-estacionamiento.svg";
import iconValet from "../assets/icons/icon-valet.svg";
import iconAireComun from "../assets/icons/icon-aire-comun.svg";
import iconAccesibilidad from "../assets/icons/icon-accesibilidad.svg";

export type ServiciosSectionType = {
  className?: string;
};

const servicios = [
  {
    icon: iconEstacionamiento,
    title: "Estacionamiento Privado",
    description: "Espacios exclusivos para huéspedes con acceso cómodo y seguro.",
  },
  {
    icon: iconValet,
    title: "Valet Parking",
    description: "Servicio de estacionamiento las 24 horas para mayor comodidad.",
  },
  {
    icon: iconAireComun,
    title: "Aire Acondicionado",
    description: "Áreas comunes climatizadas para garantizar una estancia confortable en todas nuestras instalaciones.",
  },
  {
    icon: iconAccesibilidad,
    title: "Accesibilidad",
    description: "Instalaciones adaptadas para ofrecer comodidad y accesibilidad a todos nuestros huéspedes.",
  },
];

const ServiciosSection: FunctionComponent<ServiciosSectionType> = ({
  className = "",
}) => {
  return (
    <section id="servicios"
      className={`w-full bg-[#F8F5F2] py-16 md:py-20 px-6 md:px-12 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-3 md:gap-4">
        <span className="text-[#1B236E] font-[Poppins] font-normal text-[16px] tracking-[2px] uppercase">
          Servicio Selecto
        </span>

        <h2 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-snug max-w-4xl">
          Viajeros de Negocios · Grupos Deluxe · Grupos de Fin de Semana
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 w-full">
          {servicios.map((servicio) => (
            <div
  key={servicio.title}
  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100/80 rounded-2xl flex flex-col items-center text-center gap-3 p-4 sm:p-8"
>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1B236E]/10 flex items-center justify-center">
  <img src={servicio.icon} alt={servicio.title} className="w-5 h-5 sm:w-7 sm:h-7" />
</div>

<h3 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-base sm:text-xl">
  {servicio.title}
</h3>

<p className="text-[#1C1B1B]/70 font-[Poppins] font-normal text-xs sm:text-sm leading-relaxed">
  {servicio.description}
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;