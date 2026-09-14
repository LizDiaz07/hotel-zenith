import LegalPageTemplate from "../components/legal/LegalPageTemplate";
import heroPrivacidad from "../assets/legal/hero-privacidad.webp";

export default function AvisoPrivacidadPage() {
  return (
    <LegalPageTemplate
      title="Aviso de Privacidad"
      description="Conoce cómo protegemos y tratamos la información personal de nuestros huéspedes y visitantes."
      backgroundImage={heroPrivacidad}
      sections={[
        {
          heading: "Compromiso con tu privacidad",
          body: "En Hotel ZENITH, valoramos profundamente la confianza que depositas en nosotros. Su privacidad es nuestra máxima prioridad. La información personal que recopilamos se utiliza exclusivamente para gestionar sus reservas, personalizar su estancia y garantizar que reciba el nivel de excelencia en el servicio que caracteriza a nuestra marca. Nos comprometemos a manejar sus datos con la más estricta confidencialidad y transparencia.",
        },
        {
          heading: "Información que recopilamos",
          body: "De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, recopilamos datos tales como su nombre completo, dirección de correo electrónico, número de teléfono, detalles de pago y preferencias de habitación. Estos datos son esenciales para formalizar el contrato de hospedaje y cumplir con las normativas legales locales e internacionales vigentes.",
        },
        {
          heading: "Protección de la información",
          body: "Implementamos medidas de seguridad administrativas, técnicas y físicas rigurosas para proteger sus datos personales contra daño, pérdida, alteración o uso no autorizado. Hotel ZENITH no vende, alquila ni comparte su información personal con terceros con fines comerciales ajenos a su estancia, salvo cuando sea requerido por autoridades competentes.",
        },
        {
          heading: "Derechos del titular",
          body: "Usted tiene el derecho de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO) respecto al tratamiento de sus datos. Para ejercer estos derechos o revocar su consentimiento, puede ponerse en contacto con nuestro Departamento de Datos Personales a través del correo electrónico proporcionado en la sección de contacto de este sitio.",
        },
        {
          heading: "Actualizaciones del aviso",
          body: "Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos o por nuestras prácticas de privacidad. Cualquier cambio será publicado oportunamente en nuestro sitio web oficial.",
        },
      ]}
    />
  );
}