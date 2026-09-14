import LegalPageTemplate from "../components/legal/LegalPageTemplate";
import heroTerminos from "../assets/legal/hero-terminos.webp";

export default function TerminosCondicionesPage() {
  return (
    <LegalPageTemplate
      title="Términos y Condiciones"
      description="Conoce las condiciones de uso de nuestro sitio web y las políticas relacionadas con nuestros servicios."
      backgroundImage={heroTerminos}
      sections={[
        {
          heading: "Uso del sitio web",
          body: "El uso de este sitio web implica la aceptación de los presentes Términos y Condiciones. La información publicada tiene como finalidad brindar detalles sobre las instalaciones, habitaciones, servicios y medios de contacto de Hotel ZENITH.",
        },
        {
          heading: "Reservaciones",
          body: "Las reservaciones realizadas a través del sitio son gestionadas mediante una plataforma externa de reservaciones. La disponibilidad, tarifas, políticas de cancelación, modificaciones y demás condiciones aplicables estarán sujetas a los términos establecidos por dicha plataforma al momento de confirmar la reserva.",
        },
        {
          heading: "Exactitud de la información",
          body: "Hotel ZENITH procura mantener la información del sitio actualizada y precisa. Sin embargo, las tarifas, promociones, horarios, servicios, fotografías e información general podrán modificarse sin previo aviso.",
        },
        {
          heading: "Uso de imágenes",
          body: "Las imágenes publicadas son ilustrativas y representan las instalaciones y habitaciones del hotel. Algunos elementos pueden variar según la disponibilidad o actualizaciones realizadas.",
        },
        {
          heading: "Responsabilidad del usuario",
          body: "El usuario se compromete a utilizar este sitio web de forma responsable, absteniéndose de realizar acciones que puedan afectar su funcionamiento, seguridad o disponibilidad.",
        },
        {
          heading: "Propiedad intelectual",
          body: "Todo el contenido de este sitio, incluyendo textos, fotografías, logotipos, gráficos, diseño e identidad visual, es propiedad de Hotel Zenith o cuenta con las autorizaciones correspondientes para su uso. Queda prohibida su reproducción total o parcial sin autorización previa.",
        },
        {
          heading: "Contacto",
          body: "Para cualquier duda relacionada con reservaciones, servicios o información publicada, el usuario podrá comunicarse con Hotel ZENITH mediante los medios de contacto oficiales disponibles en este sitio web.",
        },
      ]}
    />
  );
}