import { type FunctionComponent, type FormEvent, useState } from "react";
import {
  contactInfo,
  mapEmbedSrc,
  directionsUrl,
  whatsappUrl,
} from "../config/contact";
import iconPin from "../assets/icons/icon-pin-contacto.svg";
import iconTelefono from "../assets/icons/icon-telefono.svg";
import iconEmail from "../assets/icons/icon-email.svg";
import iconInstagram from "../assets/icons/icon-instagram.png";
import iconFacebook from "../assets/icons/icon-facebook.svg";
//import { Link } from 'react-router-dom'

export type ContactoSectionType = {
  className?: string;
};

/* --- Íconos que aún no se tiene exportado de Figma --- */
const IconWhatsApp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14a2.9 2.9 0 0 1-2 1.45c-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.58c.19 0 .43-.07.68.52.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.31.31-.13.6.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.37 2.45 1.52.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.73-.16 1.4Z" />
  </svg>
);
const IconArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IconExpand = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

/* --- Formulario --- */
type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// ===============================
// VALIDACIONES DEL FORMULARIO
// ===============================

// Email:
// - Sin espacios
// - Debe contener @
// - Debe tener un dominio
// - El dominio final debe tener al menos 2 caracteres
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Teléfono:
// Permitimos números, espacios, +, -, (, )
// La cantidad real de dígitos se valida posteriormente.
const phoneRegex = /^[0-9+\-()\s]+$/;

// Nombre:
// Permite:
// - Letras
// - Acentos
// - Ñ / ñ
// - Ü / ü
// - Espacios simples
// - Apóstrofes
// - Guiones
//
// Ejemplos válidos:
// Juan Pérez
// María José
// O'Connor
// Ana-María
const nameRegex =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜüÀ-ÖØ-öø-ÿ'’]+(?:[ -][A-Za-zÁÉÍÓÚáéíóúÑñÜüÀ-ÖØ-öø-ÿ'’]+)*$/;

// Evita que el usuario introduzca etiquetas HTML.
// Importante: esto NO sustituye la protección del servidor.
const dangerousCharsRegex = /[<>]/;


function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  // Normalizamos los valores antes de validarlos.
  const name = form.name.trim().replace(/\s+/g, " ");
  const email = form.email.trim();
  const phone = form.phone.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();


  // ===============================
  // NOMBRE
  // ===============================

  if (!name) {
    errors.name = "El nombre es obligatorio.";

  } else if (name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";

  } else if (name.length > 80) {
    errors.name = "El nombre no puede superar los 80 caracteres.";

  } else if (dangerousCharsRegex.test(name)) {
    errors.name = "El nombre contiene caracteres no permitidos.";

  } else if (!nameRegex.test(name)) {
    errors.name =
      "Ingresa un nombre válido usando letras, espacios, guiones o apóstrofes.";
  }


  // ===============================
  // EMAIL
  // ===============================

  if (!email) {
    errors.email = "El correo es obligatorio.";

  } else if (email.length > 120) {
    errors.email = "El correo es demasiado largo.";

  } else if (dangerousCharsRegex.test(email)) {
    errors.email = "El correo contiene caracteres no permitidos.";

  } else if (!emailRegex.test(email)) {
    errors.email = "Ingresa un correo electrónico válido.";
  }


  // ===============================
  // TELÉFONO
  // ===============================

  if (!phone) {
    errors.phone = "El teléfono es obligatorio.";

  } else if (phone.length > 30) {
    errors.phone = "El teléfono es demasiado largo.";

  } else if (!phoneRegex.test(phone)) {
    errors.phone =
      "El teléfono solo puede contener números, espacios y los símbolos +, -, ( y ).";

  } else {
    // Eliminamos todo excepto números
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      errors.phone =
        "El teléfono debe contener al menos 10 dígitos.";

    } else if (digitsOnly.length > 15) {
      errors.phone =
        "El teléfono no puede contener más de 15 dígitos.";
    }
  }


  // ===============================
  // ASUNTO
  // ===============================

  if (!subject) {
    errors.subject = "El asunto es obligatorio.";

  } else if (subject.length < 3) {
    errors.subject = "El asunto debe tener al menos 3 caracteres.";

  } else if (subject.length > 120) {
    errors.subject =
      "El asunto no puede superar los 120 caracteres.";

  } else if (dangerousCharsRegex.test(subject)) {
    errors.subject =
      "El asunto contiene caracteres no permitidos.";
  }


  // ===============================
  // MENSAJE
  // ===============================

  if (!message) {
    errors.message = "El mensaje es obligatorio.";

  } else if (message.length < 10) {
    errors.message =
      "El mensaje debe tener al menos 10 caracteres.";

  } else if (message.length > 2000) {
    errors.message =
      "El mensaje no puede superar los 2000 caracteres.";

  } else if (dangerousCharsRegex.test(message)) {
    errors.message =
      "El mensaje contiene caracteres no permitidos.";
  }


  return errors;
}


const inputClasses =
  "w-full bg-gray-50 rounded-xl border border-gray-200 focus:border-[#1B236E] focus:outline-none px-4 py-3 font-[Poppins] text-sm text-[#1C1B1B] placeholder:text-[#1C1B1B]/40 transition-colors";

/* --- Tarjeta de red social (usada en versión móvil y desktop) --- */
type SocialCardProps = {
  href: string;
  icon: string;
  iconAlt: string;
  network: string;
  handle: string;
  description: string;
  cta: string;
};

const SocialCard: FunctionComponent<SocialCardProps> = ({
  href,
  icon,
  iconAlt,
  network,
  handle,
  description,
  cta,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${network} de Hotel ZENITH`}
    className="group flex-1 flex flex-col items-center text-center gap-3 sm:flex-row sm:items-start sm:text-left sm:gap-4 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_14px_rgba(27,35,110,0.06)] px-4 py-5 sm:px-6 sm:py-6 hover:border-[#1B236E]/40 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(27,35,110,0.10)] transition-all duration-300 ease-out"
  >
    <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#1B236E] transition-colors duration-300">
      <img src={icon} alt={iconAlt || ""} className="w-6 h-6 sm:w-7 sm:h-7" />
    </span>

    <div className="w-full min-w-0 flex flex-col items-center sm:items-start gap-0.5">
      <h4 className="text-[#1C1B1B] font-[Poppins] font-semibold text-sm sm:text-base">
        {network}
      </h4>
      <p className="text-[#1B236E]/80 font-[Poppins] font-medium text-xs sm:text-sm truncate max-w-full">
        {handle}
      </p>
      <p className="text-[#1C1B1B]/55 font-[Poppins] font-normal text-xs sm:text-sm mt-1 leading-snug">
        {description}
      </p>
      <span className="mt-2 inline-flex items-center gap-1 text-[#1B236E] font-[Poppins] font-semibold text-xs sm:text-sm">
        {cta}
        <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </div>
  </a>
);

const ContactoSection: FunctionComponent<ContactoSectionType> = ({
  className = "",
}) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {

      const formattedMessage = `HOTEL ZENITH
Nuevo mensaje recibido desde el sitio web
─────────────────────

👤 Nombre: ${form.name}
✉️ Correo: ${form.email}
📞 Teléfono: ${form.phone}
📌 Motivo: ${form.subject}

💬 Mensaje:
${form.message}

─────────────────────
Enviado desde el formulario de contacto de hotelzenith.com.mx`;

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    subject: `📩 ${form.subject} — ${form.name}`,
    from_name: "Hotel ZENITH · Sitio Web",
    email: form.email,
    message: formattedMessage,
  }),
});

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className={`w-full bg-[#F8F5F2] py-16 md:py-20 px-6 md:px-12 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h2 className="text-[#1B236E] font-[Playfair_Display] font-bold text-[28px] sm:text-[34px] md:text-[42px] leading-tight text-center">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda: mapa + info de contacto */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] w-full">
              <iframe
                title="Ubicación de Hotel ZENITH"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <button
                onClick={() => setIsMapExpanded(true)}
                className="hidden lg:flex absolute top-3 right-3 w-9 h-9 items-center justify-center rounded-lg bg-white shadow-md text-[#1B236E] cursor-pointer border-none z-10 hover:bg-[#F6F3F2] transition-colors"
                aria-label="Ampliar mapa"
              >
                <IconExpand />
              </button>
            </div>

            
              <a href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-center lg:self-start inline-flex items-center gap-2 cursor-pointer border-none py-3 px-6 bg-[#1b236e] text-white font-[Poppins] font-semibold text-sm rounded-full hover:bg-[#4f57a1] focus:outline-none focus:ring-2 focus:ring-[#1b236e]/50 transition-colors"
            >
              Cómo llegar
              <IconArrowRight />
            </a>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 lg:mt-4">
              {/* Dirección */}
              
                <a href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_14px_rgba(27,35,110,0.05)] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#1B236E]/30 hover:shadow-[0_8px_20px_rgba(27,35,110,0.08)] transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full bg-[#1B236E]/10 group-hover:bg-[#1B236E]/15 transition-colors duration-300">
                    <img
                      src={iconPin}
                      alt=""
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h4 className="text-[#1C1B1B] font-[Poppins] font-semibold text-sm">
                    Dirección
                  </h4>
                </div>
                <p className="text-[#1C1B1B]/60 font-[Poppins] font-normal text-xs sm:text-sm leading-snug">
                  {contactInfo.addressLine1},<br />
                  {contactInfo.addressLine2}.
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[#1B236E] font-[Poppins] font-medium text-xs sm:text-sm">
                  Ver ubicación
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Teléfono */}
              <div className="group flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_14px_rgba(27,35,110,0.05)] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#1B236E]/30 hover:shadow-[0_8px_20px_rgba(27,35,110,0.08)] transition-all duration-300 ease-out">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full bg-[#1B236E]/10 group-hover:bg-[#1B236E]/15 transition-colors duration-300">
                    <img
                      src={iconTelefono}
                      alt=""
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h4 className="text-[#1C1B1B] font-[Poppins] font-semibold text-sm">
                    Teléfono
                  </h4>
                </div>
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    
                      <a key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="text-[#1C1B1B]/60 font-[Poppins] font-normal text-xs sm:text-sm hover:text-[#1B236E] focus:outline-none focus:text-[#1B236E] transition-colors w-fit"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
                
                  <a href={`tel:${contactInfo.phones[0].tel}`}
                  className="mt-auto inline-flex items-center gap-1 text-[#1B236E] font-[Poppins] font-medium text-xs sm:text-sm w-fit"
                >
                  Llamar
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* WhatsApp */}
              
               <a href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_14px_rgba(27,35,110,0.05)] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#1B236E]/30 hover:shadow-[0_8px_20px_rgba(27,35,110,0.08)] transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full bg-[#1B236E]/10 group-hover:bg-[#1B236E]/15 transition-colors duration-300">
                    <IconWhatsApp className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1B236E] transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <h4 className="text-[#1C1B1B] font-[Poppins] font-semibold text-sm">
                    WhatsApp
                  </h4>
                </div>
                <p className="text-[#1C1B1B]/60 font-[Poppins] font-normal text-xs sm:text-sm">
                  {contactInfo.whatsapp.display}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[#1B236E] font-[Poppins] font-medium text-xs sm:text-sm">
                  Enviar mensaje
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Email */}
              
                <a href={`mailto:${contactInfo.email}`}
                className="group flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_14px_rgba(27,35,110,0.05)] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#1B236E]/30 hover:shadow-[0_8px_20px_rgba(27,35,110,0.08)] transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full bg-[#1B236E]/10 group-hover:bg-[#1B236E]/15 transition-colors duration-300">
                    <img
                      src={iconEmail}
                      alt=""
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h4 className="text-[#1C1B1B] font-[Poppins] font-semibold text-sm">
                    Email
                  </h4>
                </div>
                <p className="text-[#1C1B1B]/60 font-[Poppins] font-normal text-xs sm:text-sm break-all">
                  {contactInfo.email}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[#1B236E] font-[Poppins] font-medium text-xs sm:text-sm">
                  Enviar correo
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>


          </div>

          {/* Columna derecha: formulario */}
          <div className="flex flex-col gap-8 lg:h-full">
              <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(27,35,110,0.08)] p-6 sm:p-8 flex flex-col gap-5 lg:flex-1">
              <h3 className="text-[#1C1B1B] font-[Playfair_Display] font-semibold text-2xl">
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 lg:flex-1">
                <div>
                  <label htmlFor="name" className="block text-[#1C1B1B] font-[Poppins] font-semibold text-sm mb-1">
                    Nombre Completo
                  </label>
                  
                  <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={80}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 font-[Poppins] text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1C1B1B] font-[Poppins] font-semibold text-sm mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={120}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@ejemplo.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-600 font-[Poppins] text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#1C1B1B] font-[Poppins] font-semibold text-sm mb-1">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="55 1234 5678"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-600 font-[Poppins] text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#1C1B1B] font-[Poppins] font-semibold text-sm mb-1">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    maxLength={120}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ej. Disponibilidad de habitación"
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-600 font-[Poppins] text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                 <div className="flex flex-col lg:flex-1">
                  <label htmlFor="message" className="block text-[#1C1B1B] font-[Poppins] font-semibold text-sm mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClasses} resize-none lg:flex-1 lg:min-h-[100px]`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-600 font-[Poppins] text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 cursor-pointer border-none py-3 px-8 bg-[#1b236e] text-white font-[Poppins] font-semibold text-sm rounded-full hover:bg-[#4f57a1] focus:outline-none focus:ring-2 focus:ring-[#1b236e]/50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>

                {status === "success" && (
                  <p className="text-green-700 bg-green-50 rounded-lg px-4 py-3 font-[Poppins] text-sm text-center">
                    ¡Tu mensaje fue enviado con éxito! Te contactaremos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-700 bg-red-50 rounded-lg px-4 py-3 font-[Poppins] text-sm text-center">
                    Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
                  </p>
                )}
              </form>
            </div>

           
            {/* Redes sociales - solo visible en móvil/tablet, debajo del formulario */}
            <div className="lg:hidden flex flex-col gap-4">
            <h3 className="text-[#1B236E] font-[Playfair_Display] font-semibold text-2xl md:text-3xl text-center">
                Conoce más de Hotel Zenith
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <SocialCard
                  href={contactInfo.social.instagram}
                  icon={iconInstagram}
                  iconAlt="Instagram"
                  network="Instagram"
                  handle="@hotelzenith_tehuacan"
                  description="Conoce nuestras habitaciones y espacios"
                  cta="Ver perfil"
                />
                <SocialCard
                  href={contactInfo.social.facebook}
                  icon={iconFacebook}
                  iconAlt="Facebook"
                  network="Facebook"
                  handle="Hotel ZENITH"
                  description="Información, novedades y contacto"
                  cta="Ver página"
                />
              </div>
            </div>


          </div>
        </div>

        {/* Redes sociales - solo visible en desktop (lg+), fuera de las 2 columnas, ancho completo */}
                {/* Redes sociales - solo visible en desktop (lg+), fuera de las 2 columnas, ancho completo */}
        <div className="hidden lg:flex flex-col items-center w-full gap-6">
          <h3 className="text-[#1B236E] font-[Playfair_Display] font-semibold text-2xl md:text-3xl text-center">
                Conoce más de Hotel Zenith
              </h3>
          <div className="flex items-stretch gap-6 w-full max-w-2xl">
            <SocialCard
              href={contactInfo.social.instagram}
              icon={iconInstagram}
              iconAlt="Instagram"
              network="Instagram"
              handle="@hotelzenith_tehuacan"
              description="Conoce nuestras habitaciones y espacios"
              cta="Ver perfil"
            />
            <SocialCard
              href={contactInfo.social.facebook}
              icon={iconFacebook}
              iconAlt="Facebook"
              network="Facebook"
              handle="Hotel ZENITH"
              description="Información, novedades y contacto"
              cta="Ver página"
            />
          </div>
        </div>
      </div>

      {isMapExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsMapExpanded(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMapExpanded(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-[#1B236E] text-xl cursor-pointer border-none hover:bg-[#F6F3F2] transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <iframe
              title="Ubicación de Hotel ZENITH - ampliado"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactoSection;