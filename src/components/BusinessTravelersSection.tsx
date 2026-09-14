import { type FunctionComponent } from "react";
import iconUbicacion from "../assets/icons/icon-ubicacion.svg";
import iconWifi from "../assets/icons/icon-wifi.svg";
import iconSalas from "../assets/icons/icon-salas.svg";
import iconAtencion from "../assets/icons/icon-atencion.svg";

export type BusinessTravelersSectionType = {
  className?: string;
};

const items = [
  {
    icon: iconUbicacion,
    title: "Ubicación estratégica",
    description: "En el corazón de la ciudad, cerca de sus lugares de interés.",
  },
  {
    icon: iconWifi,
    title: "WiFi de alta velocidad",
    description: "Conexión estable y ultrarrápida en todas las áreas del hotel.",
  },
  {
    icon: iconSalas,
    title: "Salas de reuniones",
    description: "Servicios de oficina y Coffee break.",
  },
  {
    icon: iconAtencion,
    title: "Atención personalizada",
    description: "Nuestro equipo está listo para atender sus necesidades.",
  },
];

const BusinessTravelersSection: FunctionComponent<BusinessTravelersSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-3 md:gap-4">
        <span className="text-[#1B236E] font-[Poppins] font-normal text-[16px] tracking-[2px] uppercase">
          Excelencia Ejecutiva
        </span>

        <h2 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight max-w-3xl">
          Diseñado para Viajeros de Negocios
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 mt-6 md:mt-8 w-full">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <img src={item.icon} alt={item.title} className="w-9 h-9 md:w-10 md:h-10" />
              <h3 className="text-[#1C1B1B] font-[Poppins] font-normal text-[18px]">
                {item.title}
              </h3>
              <p className="text-[#1C1B1B]/70 font-[Poppins] font-normal text-[14px] leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTravelersSection;