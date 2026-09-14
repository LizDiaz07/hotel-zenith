import { type FunctionComponent } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden ${className}`}
    >
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Lobby del hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay con degradado para que el texto resalte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-5 md:gap-7 px-4 md:px-6">

        <h1 className="text-white font-[Montserrat] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.15] lg:leading-[70px] tracking-normal lg:tracking-[-1.28px]">
  HOTEL ZENITH
</h1>

        <p className="text-white font-[Poppins] font-normal text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-xl">
          Más que un hotel, un espacio creado para brindar hospitalidad,
          comodidad y excelencia, en el centro de TEHUACÁN.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            to="/habitaciones"
            className="cursor-pointer border-none py-3 px-8 bg-[#1b236e] text-white font-[Poppins] font-semibold text-[15px] md:text-[16px] lg:text-[18px] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#4f57a1] transition-colors">
            Conocer habitaciones
          </Link>

          <Link
            to="/contacto"
            className="cursor-pointer py-3 px-8 border border-white text-white font-[Poppins] font-semibold text-[15px] md:text-[16px] lg:text-[18px] rounded-full hover:bg-white/10 transition-colors">
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div className="absolute bottom-8 z-10 text-white/80 text-3xl animate-bounce">
        ⌄
      </div>
    </section>
  );
};

export default HeroSection;