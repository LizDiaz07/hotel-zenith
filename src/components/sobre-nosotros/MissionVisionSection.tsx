interface MissionVisionItem {
  icon: string;
  title: string;
  description: string;
}

interface MissionVisionSectionProps {
  items: MissionVisionItem[];
}

export default function MissionVisionSection({ items }: MissionVisionSectionProps) {
  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-8 border-t-4 border-[#1B236E]"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img src={item.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <h3 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-base sm:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-xs sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}