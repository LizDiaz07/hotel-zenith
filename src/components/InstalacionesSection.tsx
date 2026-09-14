import { type FunctionComponent, useState } from "react";
import negociosImg from "../assets/instalaciones/negocios.webp";
import terrazaImg from "../assets/instalaciones/terraza.webp";
import spaImg from "../assets/instalaciones/spa.webp";
import gimnasioImg from "../assets/instalaciones/gimnasio.webp";
import kidsClubImg from "../assets/instalaciones/kids-club.webp";
import restauranteImg from "../assets/instalaciones/restaurante.webp";
import spaModalImg from "../assets/instalaciones/modales/spa-modal.webp";
import gimnasioModalImg from "../assets/instalaciones/modales/gimnasio-modal.webp";
import kidsClubModalImg from "../assets/instalaciones/modales/kids-club-modal.webp";
import restauranteModalImg from "../assets/instalaciones/modales/restaurante-modal.webp";
import { Link } from 'react-router-dom'

export type InstalacionesSectionType = {
  className?: string;
};

type DetailEntry = { day?: string; time: string };
type DetailGroup = { label: string; entries: DetailEntry[] };

type SmallCard = {
  key: string;
  name: string;
  cardImg: string;
  modalImg: string;
  description: string;
  details: DetailGroup[];
};

const smallCards: SmallCard[] = [
  {
    key: "spa",
    name: "Spa",
    cardImg: spaImg,
    modalImg: spaModalImg,
    description:
      "Espacio perfecto para pausar el día, relajar la mente y regalarte un momento de bienestar.",
    details: [
      { label: "Horario", entries: [{ time: "7:00 AM - 8:00 PM" }] },
      { label: "Servicio", entries: [{ time: "Bajo Reservación" }] },
    ],
  },
  {
    key: "gimnasio",
    name: "Gimnasio",
    cardImg: gimnasioImg,
    modalImg: gimnasioModalImg,
    description:
      "Espacio activo y equipado, diseñado para mantener tu rutina de bienestar con total comodidad.",
    details: [
      { label: "Horario", entries: [{ time: "8:00 AM - 9:00 PM" }] },
      { label: "Servicio", entries: [{ time: "Bajo Reservación" }] },
    ],
  },
  {
    key: "kids-club",
    name: "Kids Club",
    cardImg: kidsClubImg,
    modalImg: kidsClubModalImg,
    description:
      "Cómodo perfecto para que los niños se diviertan en un ambiente cómodo, alegre y protegido.",
    details: [
      { label: "Horario", entries: [{ time: "8:00 AM - 9:00 PM" }] },
      { label: "Servicio", entries: [{ time: "Bajo Reservación" }] },
    ],
  },
  {
    key: "restaurante",
    name: "Restaurante",
    cardImg: restauranteImg,
    modalImg: restauranteModalImg,
    description:
      "Una propuesta gastronómica creada para complementar tu estancia con ingredientes frescos y momentos llenos de sabor.",
    details: [
      {
        label: "Desayunador",
        entries: [
          { day: "Lunes a Sábado", time: "7:00 AM - 10:00 AM" },
          { day: "Domingo", time: "8:00 AM - 11:00 AM" },
        ],
      },
      {
        label: "Servicio de Cena",
        entries: [{ day: "Lunes a Sábado", time: "7:00 PM - 10:00 PM" }],
      },
    ],
  },
];

const InstalacionesSection: FunctionComponent<InstalacionesSectionType> = ({
  className = "",
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const activeCard = smallCards.find((c) => c.key === activeModal);

  return (
    <section id="instalaciones"
      className={`w-full bg-[#F8F5F2] py-16 md:py-20 px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-2 mb-6 md:mb-10">
          <span className="text-[#1B236E] font-[Poppins] font-normal text-[16px] tracking-[2px] uppercase">
            Nuestras Instalaciones
          </span>
          <h2 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight">
            Espacios de Primer Nivel
          </h2>
        </div>

        {/* Tarjeta grande: Reuniones y Negocios */}
        <div className="relative w-full min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden flex flex-col justify-center p-6 md:p-10">
  <img
    src={negociosImg}
    alt="Reuniones y Negocios"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/50 to-black/15" />
  <span className="absolute z-10 top-6 right-6 md:top-8 md:right-10 text-[#f5b942] font-[Poppins] font-semibold text-xs tracking-[2px] uppercase">
    Negocios
  </span>
  <div className="relative z-10 flex flex-col items-end text-right gap-4 max-w-xl ml-auto">
    <h3 className="text-white font-[Playfair_Display] font-semibold text-[26px] md:text-[36px] leading-tight">
      Reuniones y Negocios
    </h3>
    <p className="text-white/90 font-[Poppins] font-normal text-sm md:text-base leading-relaxed">
      Salas equipadas para reuniones ejecutivas, presentaciones y capacitaciones. Espacios diseñados para ofrecer comodidad, privacidad y tecnología.
    </p>
    <Link to="/salas-reuniones" className="cursor-pointer border-none py-3 px-6 bg-[#1b236e] text-white font-[Poppins] font-semibold text-sm rounded-full hover:bg-[#4f57a1] transition-colors">
      Conocer la sala
    </Link>
  </div>
</div>

        {/* Tarjeta grande: Terraza */}

        <div className="relative w-full min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden flex flex-col justify-center p-6 md:p-10">
          <img
            src={terrazaImg}
            alt="Terraza con Vista a la Ciudad"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
          <div className="relative z-10 flex flex-col items-start gap-4 max-w-md">
    <span className="text-[#f5b942] font-[Poppins] font-semibold text-xs tracking-[2px] uppercase">
      Exclusividad
    </span>
    <h3 className="text-white font-[Playfair_Display] font-semibold text-[26px] md:text-[36px] leading-tight">
      Terraza con Vista a la Ciudad
    </h3>
    <p className="text-white/90 font-[Poppins] font-normal text-sm md:text-base leading-relaxed">
      Un espacio ideal para relajarse después de una jornada de trabajo, disfrutar del atardecer o sostener reuniones en un ambiente moderno, cómodo y elegante.
    </p>
    <Link
      to="/terraza"
      className="cursor-pointer border-none py-3 px-6 bg-[#1b236e] text-white font-[Poppins] font-semibold text-sm rounded-full hover:bg-[#4f57a1] transition-colors inline-block text-center"
    >
      Conocer la terraza
    </Link>
  </div>
</div>

        {/* Cuadrícula de tarjetas pequeñas */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-3 sm:gap-4 mt-2">
          {/* Spa */}
          <button
  onClick={() => setActiveModal("spa")}
  className="relative min-h-[260px] md:row-span-2 rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer border-none"
>
  <img
    src={smallCards[0].cardImg}
    alt={smallCards[0].name}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 flex flex-col items-center gap-2">
    <h4 className="text-white font-[Playfair_Display] font-semibold text-xl">{smallCards[0].name}</h4>
    <span className="cursor-pointer py-2 px-4 bg-[#1b236e]/90 text-white font-[Poppins] font-medium text-xs rounded-full hover:bg-[#4f57a1] transition-colors">
      Explorar →
    </span>
  </div>
</button>

          {/* Gimnasio */}
          <button
  onClick={() => setActiveModal("gimnasio")}
  className="relative min-h-[220px] rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer border-none"
>
  <img
    src={smallCards[1].cardImg}
    alt={smallCards[1].name}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 flex flex-col items-center gap-2">
    <h4 className="text-white font-[Playfair_Display] font-semibold text-xl">{smallCards[1].name}</h4>
    <span className="cursor-pointer py-2 px-4 bg-[#1b236e]/90 text-white font-[Poppins] font-medium text-xs rounded-full hover:bg-[#4f57a1] transition-colors">
      Explorar →
    </span>
  </div>
</button>

          {/* Kids Club */}
          <button
  onClick={() => setActiveModal("kids-club")}
  className="relative min-h-[220px] rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer border-none"
>
  <img
    src={smallCards[2].cardImg}
    alt={smallCards[2].name}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 flex flex-col items-center gap-2">
    <h4 className="text-white font-[Playfair_Display] font-semibold text-xl">{smallCards[2].name}</h4>
    <span className="cursor-pointer py-2 px-4 bg-[#1b236e]/90 text-white font-[Poppins] font-medium text-xs rounded-full hover:bg-[#4f57a1] transition-colors">
      Explorar →
    </span>
  </div>
</button>

          {/* Restaurante */}
          <button
  onClick={() => setActiveModal("restaurante")}
  className="relative min-h-[220px] md:col-span-2 rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer border-none"
>
  <img
    src={smallCards[3].cardImg}
    alt={smallCards[3].name}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 flex flex-col items-center gap-2">
    <h4 className="text-white font-[Playfair_Display] font-semibold text-xl">{smallCards[3].name}</h4>
    <span className="cursor-pointer py-2 px-4 bg-[#1b236e]/90 text-white font-[Poppins] font-medium text-xs rounded-full hover:bg-[#4f57a1] transition-colors">
      Explorar →
    </span>
  </div>
</button>
          

        </div>
      </div>

      {/* Modal emergente */}
      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen con título */}
<div className="relative h-64 flex items-end p-6">
  <img
    src={activeCard.modalImg}
    alt={activeCard.name}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <h3 className="relative z-10 text-white font-[Playfair_Display] font-semibold text-3xl">
    {activeCard.name}
  </h3>
  <button
    onClick={() => setActiveModal(null)}
    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 text-white text-xl cursor-pointer border-none transition-colors"
    aria-label="Cerrar"
  >
    ✕
  </button>
</div>

            {/* Contenido */}
            <div className="p-6 flex flex-col gap-5">
              <p className="text-[#1C1B1B]/80 font-[Poppins] font-normal text-[15px] leading-relaxed">
                {activeCard.description}
              </p>

              <div className="border-t border-[#1C1B1B]/10" />

              <div className="grid grid-cols-2 gap-6">
                {activeCard.details.map((group) => (
                  <div key={group.label} className="flex flex-col gap-1">
                    <span className="text-[#1B236E] font-[Poppins] font-semibold text-xs tracking-[1.5px] uppercase">
                      {group.label}
                    </span>
                    {group.entries.map((entry, i) => (
                      <div key={i} className="text-[#1C1B1B] font-[Poppins] text-sm">
                        {entry.day && <div className="text-[#1C1B1B]/60 text-xs">{entry.day}</div>}
                        <div>{entry.time}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstalacionesSection;