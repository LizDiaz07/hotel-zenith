import { type FunctionComponent } from "react";
import { Link } from 'react-router-dom'

export type FooterType = {
  className?: string;
};

// 👇 Los anchors ahora usan "/#seccion" — esto funciona sin importar
//    en qué página del sitio esté el usuario cuando da clic
const explorarLinks = [
  { label: "Habitaciones", to: "/habitaciones" },
  { label: "Instalaciones", to: "/instalaciones" },
  { label: "Servicios", to: "/servicios" },
  { label: "Opiniones", to: "/opiniones" },
];

const companiaLinks = [
  { label: "Sobre nosotros", to: "/sobre-nosotros" }, 
  { label: "Términos y condiciones", to: "/terminos-y-condiciones" },
  { label: "Privacidad", to: "/privacidad" },
];

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`w-full bg-white px-6 md:px-12 lg:px-16 pt-14 md:pt-16 pb-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-8">
          {/* Marca */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Link
              to="/"
              className="text-[#1B236E] hover:text-[#4f57a1] focus:outline-none focus:text-[#4f57a1] transition-colors font-[Playfair_Display] font-semibold text-2xl leading-snug w-fit"
            >
              Hotel<br />ZENITH
            </Link>
            <p className="text-[#1C1B1B]/70 font-[Poppins] font-normal text-sm leading-relaxed max-w-xs">
              Líderes en hospitalidad de lujo para el viajero de negocios moderno. Excelencia, confort y tecnología en cada detalle.
            </p>
          </div>

          {/* Explorar */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#1B236E] font-[Poppins] font-semibold text-base">
              Explorar
            </h4>
            <nav className="flex flex-col gap-2">
              {explorarLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[#1C1B1B]/70 font-[Poppins] font-normal text-sm hover:text-[#1B236E] focus:outline-none focus:text-[#1B236E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Compañía */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#1B236E] font-[Poppins] font-semibold text-base">
              Compañía
            </h4>
            <nav className="flex flex-col gap-2">
              {companiaLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-[#1C1B1B]/70 font-[Poppins] font-normal text-sm hover:text-[#1B236E] focus:outline-none focus:text-[#1B236E] transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  // 👇 "Sobre nosotros": sin página todavía, se muestra pero no navega
                  <span
                    key={link.label}
                    className="text-[#1C1B1B]/40 font-[Poppins] font-normal text-sm cursor-not-allowed"
                    title="Próximamente"
                  >
                    {link.label}
                  </span>
                )
              )}
            </nav>
          </div>
        </div>

        <div className="border-t border-[#1C1B1B]/10 pt-6">
          <p className="text-[#1C1B1B]/50 font-[Poppins] font-normal text-xs text-center sm:text-left">
            © {year} Hotel ZENITH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;