interface RoomDetail {
  label: string;
  value: string;
}

interface RoomInfoSectionProps {
  title: string;
  description: string;
  details: RoomDetail[];
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function RoomInfoSection({
  title,
  description,
  details,
  ctaLabel = "Consultar disponibilidad",
  ctaHref,
  onCtaClick,
}: RoomInfoSectionProps) {
  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-4">
            {title}
          </h2>
          <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base md:text-lg max-w-xl">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-[380px] bg-white rounded-2xl shadow-sm p-6 md:p-8 flex-shrink-0">
          <p className="font-['Poppins'] font-semibold text-[#1B236E] text-xs tracking-[1.5px] uppercase mb-5">
            Detalles de la habitación
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {details.map((detail, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="font-['Poppins'] font-normal text-[#1C1B1B]/60 text-sm">
                  {detail.label}
                </span>
                <span className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
          {ctaHref ? (
            
              <a 
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer border-none w-full inline-block text-center bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm px-6 py-3.5 rounded-full"
            >
              {ctaLabel}
            </a>
          ) : (

          <button
            onClick={onCtaClick}
            className="cursor-pointer border-none w-full bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm px-6 py-3.5 rounded-full"
          >
            {ctaLabel}
            </button>
              )}
        </div>
      </div>
    </section>
  );
}