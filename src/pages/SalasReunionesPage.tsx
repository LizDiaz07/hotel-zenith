import { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import PageHero from "../components/common/PageHero";
import FeatureIconGrid from "../components/common/FeatureIconGrid";
import GaleriaSection from "../components/terraza/GaleriaSection";
import EquipmentListSection from "../components/salas-reuniones/EquipmentListSection";
import ContactCTASection from "../components/salas-reuniones/ContactCTASection";
import ContactModal from "../components/ContactModal";

//  cada import trae la imagen física
//    de la carpeta de assets y la convierte en una variable que se puede usar como prop
import heroSalas from "../assets/salas-reuniones/hero-salas.webp";
import salasGaleria1 from "../assets/salas-reuniones/galeria-1.webp";
import salasGaleria2 from "../assets/salas-reuniones/galeria-2.webp";
import salasGaleria3 from "../assets/salas-reuniones/galeria-3.webp";
import salasGaleria4 from "../assets/salas-reuniones/galeria-4.webp";

// Iconos para FeatureIconGrid y EquipmentListSection
import iconAmbiente from "../assets/icons/ambiente-profesional.svg";
import iconEquipamiento from "../assets/icons/equipamiento.svg";
import iconWifi from "../assets/icons/icon-wifi.svg";
import iconEspacios from "../assets/icons/icon-espacios-comodos.svg";
import iconPrivacidad from "../assets/icons/privacidad.svg";
import iconAtencion from "../assets/icons/icon-atencion.svg";

import iconConectividad from "../assets/icons/conectividad.svg";
import iconProyector from "../assets/icons/proyector.svg";
import iconMobiliario from "../assets/icons/mobiliario.svg";
import iconAire from "../assets/icons/icon-aire-comun.svg";
import iconWifiFibra from "../assets/icons/wifi-fibra.svg";
import iconCoffee from "../assets/icons/coffee-break.svg";

export default function SalasReunionesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <TopNavigationBar />

      <PageHero
        title="Espacios para Reuniones y Negocios"
        description="Salas diseñadas para reuniones ejecutivas, capacitaciones, presentaciones y encuentros de alto nivel."
        backgroundImage={heroSalas}
        ctaLabel="Solicitar información"
        onCtaClick={() => setIsContactOpen(true)}
      />

      <GaleriaSection
        eyebrow="Galería de imágenes"
        title="Detalles que inspiran"
        images={[salasGaleria1, salasGaleria2, salasGaleria3, salasGaleria4]}
        layout="asymmetric"
      />

      <FeatureIconGrid
        title="¿Por qué elegirnos?"
        features={[
          { icon: iconAmbiente, title: "Ambiente profesional", description: "Entornos diseñados para fomentar la concentración y la toma de decisiones estratégicas." },
          { icon: iconEquipamiento, title: "Equipamiento", description: "Para presentaciones fluidas y videollamadas." },
          { icon: iconWifi, title: "WiFi de alta velocidad", description: "Conexión dedicada y estable para garantizar la operatividad de sus equipos en todo momento." },
          { icon: iconEspacios, title: "Espacios cómodos", description: "Mobiliario ergonómico que garantiza la comodidad durante largas jornadas de trabajo." },
          { icon: iconPrivacidad, title: "Privacidad", description: "Aislamiento acústico para sus conversaciones más confidenciales." },
          { icon: iconAtencion, title: "Atención personalizada", description: "Un equipo dedicado para asistirle en cada detalle logístico de su evento corporativo." },
        ]}
      />

      <EquipmentListSection
        title="Equipamiento y Servicios"
        items={[
          { icon: iconConectividad, label: "Conectividad universal" },
          { icon: iconProyector, label: "Proyector Láser" },
          { icon: iconMobiliario, label: "Mobiliario ejecutivo" },
          { icon: iconAire, label: "Aire acondicionado" },
          { icon: iconWifiFibra, label: "WiFi de Fibra" },
          { icon: iconCoffee, label: "Coffee Break" },
        ]}
      />

      <ContactCTASection
        title="¿Planeas una reunión?"
        subtitle="Contáctanos y con gusto te brindaremos información detallada."
        ctaLabel="Contáctanos"
        onCtaClick={() => setIsContactOpen(true)}
      />

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}