interface AboutHeroProps {
  title: string;
  backgroundImage: string;
}

export default function AboutHero({ title, backgroundImage }: AboutHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h1 className="font-['Playfair_Display'] font-semibold text-white text-[32px] md:text-[56px] leading-tight max-w-2xl">
          {title}
        </h1>
      </div>
    </section>
  );
}