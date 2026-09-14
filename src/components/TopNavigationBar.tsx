import { type FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingUrl } from "../config/booking";

export type TopNavigationBarType = {
  className?: string;
};

const links = [
  { label: "Inicio", to: "/" },
  { label: "Instalaciones", to: "/instalaciones" },
  { label: "Habitaciones", to: "/habitaciones" },
  { label: "Servicios", to: "/servicios" },
  { label: "Opiniones", to: "/opiniones" },
];

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  className = "",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onButtonReservarClick = () => {
  window.open(bookingUrl, "_blank", "noopener,noreferrer");
};

  // Cuando la barra está oscura (scrolled o menú abierto)
  const isDark = menuOpen || scrolled;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDark
          ? "bg-[#0f1442]/95 backdrop-blur-md shadow-md"
          : "bg-transparent border-b border-white/15"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 py-4 md:py-6 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-[Montserrat] font-semibold tracking-tight whitespace-nowrap">
            HOTEL ZENITH
          </h1>
        </Link>

        {/* Links - ocultos en móvil */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-10 text-[15px] tracking-wide text-white font-[Poppins] font-semibold">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="relative pb-1 hover:text-white/70 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón Reservar + hamburguesa */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onButtonReservarClick}
            className={`${
              menuOpen ? "hidden" : "flex"
            } cursor-pointer border-none py-2 px-4 sm:px-6 shadow-md rounded-full items-center justify-center transition-all duration-300 ${
              isDark
                ? "bg-white text-[#1b236e] hover:bg-white/90"
                : "bg-[#1b236e] text-white hover:bg-[#4f57a1]"
            }`}
          >
            <span className="text-[13px] sm:text-[15px] lg:text-[18px] font-[Poppins] font-semibold whitespace-nowrap">
              <span className="md:hidden">Reservar</span>
              <span className="hidden md:inline">Reservar ahora</span>
            </span>
          </button>

          <button
            className="xl:hidden text-white text-2xl sm:text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="xl:hidden flex flex-col items-start gap-1 px-6 pb-6 text-white font-[Poppins] font-semibold shadow-lg rounded-b-2xl">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="w-full py-3 border-b border-white/10 hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={onButtonReservarClick}
            className="w-full mt-2 cursor-pointer border-none py-2 px-6 bg-white text-[#1b236e] rounded-full font-[Poppins] font-semibold hover:bg-white/90 transition-colors"
          >
            Reservar ahora
          </button>
        </nav>
      )}
    </div>
  );
};

export default TopNavigationBar;