import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import PageHero from "../components/common/PageHero";
import FeatureIconGrid from "../components/common/FeatureIconGrid";
import CTABanner from "../components/common/CTABanner";
import ExperienciaSection from "../components/terraza/ExperienciaSection";
import GaleriaSection from "../components/terraza/GaleriaSection";
import { bookingUrl } from "../config/booking";

import heroTerraza from "../assets/terraza/hero-terraza.webp";
import experiencia1 from "../assets/terraza/experiencia-1.webp";
import experiencia2 from "../assets/terraza/experiencia-2.webp";
import galeria1 from "../assets/terraza/galeria-1.webp";
import galeria2 from "../assets/terraza/galeria-2.webp";
import galeria3 from "../assets/terraza/galeria-3.webp";
import galeria4 from "../assets/terraza/galeria-4.webp";

import iconEspacios from "../assets/icons/icon-espacios-comodos.svg";
import iconDiseno from "../assets/icons/icon-diseño.svg";
import iconDescanso from "../assets/icons/icon-descanso.svg";

export default function TerrazaPage() {
  return (
    <>
      <TopNavigationBar />

      <PageHero
        title="Terraza"
        description="Un espacio pensado para desconectarte después de una jornada de trabajo, disfrutar del aire libre y compartir momentos agradables."
        backgroundImage={heroTerraza}
        ctaHref={bookingUrl}
      />

      <ExperienciaSection
        title="Vive la experiencia"
        description="Nuestra terraza combina comodidad, tranquilidad y vista, ofreciendo un equilibrio entre el dinamismo corporativo y la serenidad del descanso."
        imagePrimary={experiencia1}
        imageSecondary={experiencia2}
      />

      <GaleriaSection
  eyebrow="Galería de imágenes"
  title="Detalles que inspiran"
  images={[galeria1, galeria2, galeria3, galeria4]}
/>

      <FeatureIconGrid
        features={[
          {
            icon: iconEspacios,
            title: "Espacios cómodos",
            description: "Mobiliario diseñado para el confort total.",
          },
          {
            icon: iconDiseno,
            title: "Diseño moderno",
            description: "Espacio, luz y vanguardia.",
          },
          {
            icon: iconDescanso,
            title: "Descanso",
            description: "El lugar perfecto para un break entre reuniones o al finalizar el día.",
          },
        ]}
      />

      <CTABanner eyebrow="" title="¡Disfruta cada momento de tu estancia!" />

      <Footer />
    </>
  );
}