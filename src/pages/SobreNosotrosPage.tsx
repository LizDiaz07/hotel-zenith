import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import AboutHero from "../components/sobre-nosotros/AboutHero";
import QuoteSection from "../components/sobre-nosotros/QuoteSection";
import HistorySection from "../components/sobre-nosotros/HistorySection";
import MissionVisionSection from "../components/sobre-nosotros/MissionVisionSection";
import ValuesGrid from "../components/sobre-nosotros/ValuesGrid";
import CommitmentSection from "../components/sobre-nosotros/CommitmentSection";
import ImageCtaSection from "../components/sobre-nosotros/ImageCtaSection";

import heroImg from "../assets/sobre-nosotros/hero.webp";
import historiaImg from "../assets/sobre-nosotros/historia.webp";
import compromisoImg from "../assets/sobre-nosotros/compromiso.webp";
import ctaImg from "../assets/sobre-nosotros/cta-terraza.webp";

import iconMision from "../assets/icons/mision.svg";
import iconVision from "../assets/icons/vision.svg";
import iconEspiritu from "../assets/icons/espiritu-servicio.svg";
import iconRespeto from "../assets/icons/respeto.svg";
import iconEquipo from "../assets/icons/trabajo-equipo.svg";
import iconCompromiso from "../assets/icons/compromiso.svg";
import iconCalidad from "../assets/icons/calidad-certificada.svg";

export default function SobreNosotrosPage() {
  return (
    <>
      <TopNavigationBar />

      <AboutHero
        title="Sobre nosotros, nuestra esencia"
        backgroundImage={heroImg}
      />

      <QuoteSection
        quote="Hacer que un huésped se sienta como en casa es el arte supremo de la hospitalidad."
        author="César Ritz"
      />

      <HistorySection
        title="Nuestra Historia"
        image={historiaImg}
        paragraphs={[
          "Fundado en 2014, Hotel ZENITH nació con la visión de redefinir la hospitalidad corporativa en la región. Desde el primer día, nos enfocamos en crear un santuario de eficiencia y elegancia.",
          "Para el año 2015, logramos posicionarnos como el referente de excelencia, atrayendo a líderes de negocios y viajeros internacionales que buscaban no solo una estancia, sino una experiencia integral de calidad superior.",
        ]}
      />

      <MissionVisionSection
        items={[
          {
            icon: iconMision,
            title: "Misión",
            description:
              "Satisfacer las necesidades de cada uno de nuestros huéspedes bajo una filosofía de excelencia en el servicio como ventaja competitiva.",
          },
          {
            icon: iconVision,
            title: "Visión",
            description:
              "Garantizar la trascendencia de Hotel Zenith preservando como pilares fundamentales una infraestructura excepcional y la calidez en el servicio.",
          },
        ]}
      />

      <ValuesGrid
        title="Nuestros Valores"
        items={[
          {
            icon: iconEspiritu,
            title: "Espíritu de Servicio",
            description: "Anticipamos las necesidades de nuestros huéspedes con proactividad y alegría.",
          },
          {
            icon: iconRespeto,
            title: "Respeto",
            description: "Valoramos la individualidad y fomentamos un ambiente de armonía y dignidad.",
          },
          {
            icon: iconEquipo,
            title: "Trabajo en Equipo",
            description: "Colaboramos estrechamente para alcanzar objetivos comunes con eficiencia.",
          },
          {
            icon: iconCompromiso,
            title: "Compromiso",
            description: "Asumimos nuestra responsabilidad de brindar excelencia en cada interacción.",
          },
        ]}
      />

      <CommitmentSection
        title="Comprometidos con la excelencia"
        description="Nuestro equipo trabaja cada día para ofrecer una experiencia de hospitalidad basada en calidad, profesionalismo y atención personalizada. Cada detalle está diseñado para asegurar que su visita sea impecable."
        badgeIcon={iconCalidad}
        badgeLabel="Calidad Certificada"
        image={compromisoImg}
      />

      <ImageCtaSection
        title="Gracias por confiar en Hotel ZENITH."
        backgroundImage={ctaImg}
        ctaLabel="Explorar Terraza"
        ctaTo="/terraza"
      />

      <Footer />
    </>
  );
}