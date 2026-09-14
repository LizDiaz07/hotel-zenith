interface LegalSection {
  heading: string;
  body: string;
}

interface LegalContentCardProps {
  sections: LegalSection[];
  onContactClick?: () => void;
}

export default function LegalContentCard({
  sections,
  onContactClick,
}: LegalContentCardProps) {
  return (
    <div className="relative z-20 -mt-24 md:-mt-32 mb-16 md:mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-14">
          <div className="flex flex-col gap-8 md:gap-10">
            {sections.map((section, i) => (
              <div
                key={i}
                className={
                  i !== sections.length - 1
                    ? "pb-8 md:pb-10 border-b border-gray-100"
                    : ""
                }
              >
                <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-2xl md:text-3xl mb-3">
                  {section.heading}
                </h2>
                <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Caja "¿Tienes alguna duda?" */}
          <div className="mt-10 md:mt-12 bg-[#FFF8F3] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-white border border-[#1B236E]/15 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-[#1B236E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <circle cx="12" cy="8" r="0.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-xl mb-1">
                ¿Tienes alguna duda?
              </h3>
              <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm">
                Si necesitas información adicional sobre nuestras políticas o
                servicios, nuestro equipo estará encantado de ayudarte.
              </p>
            </div>

            <button
              onClick={onContactClick}
              className="cursor-pointer border-none flex-shrink-0 bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm px-6 py-3 rounded-full whitespace-nowrap"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}