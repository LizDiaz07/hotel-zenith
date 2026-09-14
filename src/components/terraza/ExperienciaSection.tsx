interface ExperienciaSectionProps {
  title: string;
  description: string;
  imagePrimary: string;
  imageSecondary: string;
}

export default function ExperienciaSection({
  title,
  description,
  imagePrimary,
  imageSecondary,
}: ExperienciaSectionProps) {
  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] leading-tight mb-4">
            {title}
          </h2>
          <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base md:text-lg max-w-md">
            {description}
          </p>
        </div>

        <div className="flex-1 flex gap-4 justify-center">
          <img
            src={imagePrimary}
            alt=""
            className="w-1/2 max-w-[280px] rounded-2xl object-cover aspect-[4/5]"
          />
          <img
            src={imageSecondary}
            alt=""
            className="w-1/2 max-w-[280px] rounded-2xl object-cover aspect-[4/5] mt-8"
          />
        </div>
      </div>
    </section>
  );
}