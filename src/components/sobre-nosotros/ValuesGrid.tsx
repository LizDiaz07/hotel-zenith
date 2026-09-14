interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface ValuesGridProps {
  title: string;
  items: ValueItem[];
}

export default function ValuesGrid({ title, items }: ValuesGridProps) {
  return (
    <section className="bg-[#F2F1EE] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-3">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#1B236E] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E9EAF5] flex items-center justify-center mb-3 sm:mb-5">
                <img src={item.icon} alt="" className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-[#1C1B1B] text-[11px] sm:text-sm tracking-wide uppercase mb-2">
                {item.title}
              </h3>
              <p className="font-['Poppins'] font-normal text-[#1C1B1B]/60 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}