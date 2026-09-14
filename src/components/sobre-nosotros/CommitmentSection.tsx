interface CommitmentSectionProps {
  title: string;
  description: string;
  badgeIcon: string;
  badgeLabel: string;
  image: string;
}

export default function CommitmentSection({
  title,
  description,
  badgeIcon,
  badgeLabel,
  image,
}: CommitmentSectionProps) {
  return (
    <section className="bg-[#FFF8F3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#1C1B1B] text-[28px] md:text-[40px] mb-4">
            {title}
          </h2>
          <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-base leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex items-center gap-3">
            <img src={badgeIcon} alt="" className="w-5 h-5" />
            <span className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">
              {badgeLabel}
            </span>
          </div>
        </div>

        <img
          src={image}
          alt=""
          className="w-full lg:w-1/2 rounded-2xl object-cover aspect-[4/3]"
        />
      </div>
    </section>
  );
}