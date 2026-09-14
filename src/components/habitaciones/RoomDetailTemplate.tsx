import TopNavigationBar from "../TopNavigationBar";
import Footer from "../Footer";
import PageHero from "../common/PageHero";
import CTABanner from "../common/CTABanner";
import GaleriaSection from "../terraza/GaleriaSection";
import RoomInfoSection from "./RoomInfoSection";
import ExcellenceSection from "./ExcellenceSection";
import { bookingUrl } from "../../config/booking";

interface RoomDetail {
  label: string;
  value: string;
}

interface ExcellenceItem {
  icon: string;
  title: string;
  description: string;
}

export interface RoomData {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  introTitle: string;
  introDescription: string;
  details: RoomDetail[];
  galleryImages: string[];
  excellenceItems: ExcellenceItem[];
  ctaSubtitle: string;
}

interface RoomDetailTemplateProps {
  data: RoomData;
  
}

export default function RoomDetailTemplate({ data }: RoomDetailTemplateProps) {
  return (
    <>
      <TopNavigationBar />

      <PageHero
        title={data.heroTitle}
        description={data.heroDescription}
        backgroundImage={data.heroImage}
        ctaLabel="Reservar ahora"
        ctaHref={bookingUrl}
      />

      <RoomInfoSection
        title={data.introTitle}
        description={data.introDescription}
        details={data.details}
        ctaHref={bookingUrl}
      />

      <GaleriaSection
        title="Galería de Imágenes"
        images={data.galleryImages}
        layout="grid"
      />

      <ExcellenceSection
        title="Excelencia en cada detalle"
        items={data.excellenceItems}
      />

      <CTABanner
        title="¿Listo para tu próxima estancia?"
        subtitle={data.ctaSubtitle}
      />

      <Footer />
    </>
  );
}