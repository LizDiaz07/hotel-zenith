interface LegalPageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function LegalPageHero({
  title,
  description,
  backgroundImage,
}: LegalPageHeroProps) {
  return (
    <section className="relative min-h-[65vh] md:min-h-[70vh] w-full flex items-center justify-center text-center pb-28 md:pb-36">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="font-['Playfair_Display'] font-semibold text-white text-[36px] md:text-[56px] leading-tight mb-4">
          {title}
        </h1>
        <p className="font-['Poppins'] font-normal text-white/90 text-base md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}