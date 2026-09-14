interface EquipmentItem {
  icon: string;
  label: string;
}

interface EquipmentListSectionProps {
  title: string;
  items: EquipmentItem[];
}

export default function EquipmentListSection({ title, items }: EquipmentListSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-10">
          {title}
        </h2>

        {/* 👇 La "caja": ancho fijo, centrada como bloque (mx-auto), 
               contenido interno alineado a la izquierda */}
        <div className="w-fit max-w-full mx-auto flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-left sm:w-[240px]">
              <img src={item.icon} alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="font-['Poppins'] font-normal text-[#1C1B1B] text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}