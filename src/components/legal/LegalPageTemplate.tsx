import { useState } from "react";
import TopNavigationBar from "../TopNavigationBar";
import Footer from "../Footer";
import LegalPageHero from "./LegalPageHero";
import LegalContentCard from "./LegalContentCard";
import ContactModal from "../ContactModal";

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageTemplateProps {
  title: string;
  description: string;
  backgroundImage: string;
  sections: LegalSection[];
}

export default function LegalPageTemplate({
  title,
  description,
  backgroundImage,
  sections,
}: LegalPageTemplateProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <TopNavigationBar />
      <LegalPageHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
      />
      <LegalContentCard
        sections={sections}
        onContactClick={() => setIsContactOpen(true)}
      />
      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}