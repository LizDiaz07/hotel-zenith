import { useEffect, useState, type FormEvent, type ChangeEvent } from "react";
import { contactInfo, whatsappUrl } from "../config/contact";

import iconPin from "../assets/icons/icon-pin-contacto.svg";
import iconPhone from "../assets/icons/icon-telefono.svg";
import iconEmail from "../assets/icons/icon-email.svg";
//import iconInstagram from "../assets/icons/icon-instagram.png";
//import iconFacebook from "../assets/icons/icon-facebook.svg";

const IconWhatsApp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14a2.9 2.9 0 0 1-2 1.45c-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.58c.19 0 .43-.07.68.52.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.31.31-.13.6.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.37 2.45 1.52.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.73-.16 1.4Z" />
  </svg>
);

const IconInstagram = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.19 4.32 15.13 4.23 13.9 4.23c-2.56 0-4.31 1.56-4.31 4.43v2.32H7v3h2.59V21h3.91Z" />
  </svg>
);

// ...FormState, FormErrors, validate(), inputClasses — igual que antes, sin cambios...

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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[0-9+\-()\s]+$/;
const nameRegex =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜüÀ-ÖØ-öø-ÿ'’]+(?:[ -][A-Za-zÁÉÍÓÚáéíóúÑñÜüÀ-ÖØ-öø-ÿ'’]+)*$/;
const dangerousCharsRegex = /[<>]/;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  const name = form.name.trim().replace(/\s+/g, " ");
  const email = form.email.trim();
  const phone = form.phone.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  if (!name) errors.name = "El nombre es obligatorio.";
  else if (name.length < 2) errors.name = "El nombre debe tener al menos 2 caracteres.";
  else if (name.length > 80) errors.name = "El nombre no puede superar los 80 caracteres.";
  else if (dangerousCharsRegex.test(name)) errors.name = "El nombre contiene caracteres no permitidos.";
  else if (!nameRegex.test(name)) errors.name = "Ingresa un nombre válido usando letras, espacios, guiones o apóstrofes.";

  if (!email) errors.email = "El correo es obligatorio.";
  else if (email.length > 120) errors.email = "El correo es demasiado largo.";
  else if (dangerousCharsRegex.test(email)) errors.email = "El correo contiene caracteres no permitidos.";
  else if (!emailRegex.test(email)) errors.email = "Ingresa un correo electrónico válido.";

  if (!phone) errors.phone = "El teléfono es obligatorio.";
  else if (phone.length > 30) errors.phone = "El teléfono es demasiado largo.";
  else if (!phoneRegex.test(phone)) errors.phone = "El teléfono solo puede contener números, espacios y los símbolos +, -, ( y ).";
  else {
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) errors.phone = "El teléfono debe contener al menos 10 dígitos.";
    else if (digitsOnly.length > 15) errors.phone = "El teléfono no puede contener más de 15 dígitos.";
  }

  if (!subject) errors.subject = "El asunto es obligatorio.";
  else if (subject.length < 3) errors.subject = "El asunto debe tener al menos 3 caracteres.";
  else if (subject.length > 120) errors.subject = "El asunto no puede superar los 120 caracteres.";
  else if (dangerousCharsRegex.test(subject)) errors.subject = "El asunto contiene caracteres no permitidos.";

  if (!message) errors.message = "El mensaje es obligatorio.";
  else if (message.length < 10) errors.message = "El mensaje debe tener al menos 10 caracteres.";
  else if (message.length > 2000) errors.message = "El mensaje no puede superar los 2000 caracteres.";
  else if (dangerousCharsRegex.test(message)) errors.message = "El mensaje contiene caracteres no permitidos.";

  return errors;
}

const inputClasses =
  "w-full bg-gray-50 rounded-xl border border-gray-200 focus:border-[#1B236E] focus:outline-none px-4 py-3 font-[Poppins] text-sm text-[#1C1B1B] placeholder:text-[#1C1B1B]/40 transition-colors";
 

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Bloquea el scroll del fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60"
      onClick={onClose}
      >
        <div className="flex min-h-full items-center justify-center px-4 py-8">
          

        <div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="cursor-pointer absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#1C1B1B] text-lg transition-colors"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto lg:overflow-hidden">

          {/* Columna izquierda: info de contacto */}

        {/* Columna izquierda: info de contacto */}
<div className="p-8 md:p-10 flex flex-col gap-6 overflow-y-auto min-h-0  [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#1B236E]/20 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div>
            <h2 className="font-['Playfair_Display'] font-semibold text-[#1B236E] text-3xl mb-3">
              Estamos a tus órdenes
            </h2>
            <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm">
              ¿Tienes alguna duda o solicitud especial?<br></br> Nuestro equipo está
              disponible las 24 horas para asegurar que tu estancia sea perfecta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
            <div className="flex items-start gap-3 min-w-0">
              <img src={iconPin} alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">Dirección</p>
                <p className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm">
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 min-w-0">
              <img src={iconPhone} alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">Teléfono</p>
                {contactInfo.phones.map((phone, i) => (
                  
                    <a key={i}
                    href={`tel:${phone.tel}`}
                    className="block font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm hover:text-[#1B236E] transition-colors"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 min-w-0">
              <IconWhatsApp className="w-5 h-5 mt-1 flex-shrink-0 text-[#1B236E]" />
              <div className="min-w-0">
                <p className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">WhatsApp</p>
                
                  <a href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm hover:text-[#1B236E] transition-colors"
                >
                  {contactInfo.whatsapp.display}
                </a>
              </div>
            </div>

            {/* 👇 FIX: min-w-0 + break-all evita que el correo empuje el layout */}
            <div className="flex items-start gap-3 min-w-0">
              <img src={iconEmail} alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm">Email</p>
                
                  <a href={`mailto:${contactInfo.email}`}
                  className="block break-all font-['Poppins'] font-normal text-[#1C1B1B]/70 text-sm hover:text-[#1B236E] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div>
  <h3 className="font-['Playfair_Display'] font-semibold text-[#1B236E] text-lg mb-3">
    Síguenos en nuestras redes sociales.
  </h3>
  <div className="flex gap-6">
    
      <a href={contactInfo.social.instagram}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 group"
    >
      <IconInstagram className="w-9 h-9 text-[#1B236E] group-hover:text-[#4f57a1] transition-colors" />
      <span className="flex flex-col leading-tight">
        <span className="font-['Poppins'] font-semibold text-sm text-[#1C1B1B] group-hover:text-[#1B236E] transition-colors">
          Instagram
        </span>
        <span className="font-['Poppins'] font-normal text-xs text-[#1C1B1B]/60">
          {contactInfo.hotelNameInstagram}
        </span>
      </span>
    </a>
    
      <a href={contactInfo.social.facebook}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 group"
    >
      <IconFacebook className="w-9 h-9 text-[#1B236E] group-hover:text-[#4f57a1] transition-colors" />
      <span className="flex flex-col leading-tight">
        <span className="font-['Poppins'] font-semibold text-sm text-[#1C1B1B] group-hover:text-[#1B236E] transition-colors">
          Facebook
        </span>
        <span className="font-['Poppins'] font-normal text-xs text-[#1C1B1B]/60">
          {contactInfo.hotelNamefacebook}
        </span>
      </span>
    </a>
  </div>
</div>
        </div>

         {/* Columna derecha: formulario — OCULTO en pantallas pequeñas/medianas */}
        <div className="hidden lg:block bg-[#1B236E]/5 border-l border-[#1B236E]/10 p-8 md:p-10 overflow-y-auto">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#1B236E] text-2xl mb-6">
            Envíanos un mensaje
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm block mb-1.5">
                Nombre Completo
              </label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ej. Juan Pérez" className={inputClasses} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm block mb-1.5">
                Correo Electrónico
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="juan@ejemplo.com" className={inputClasses} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm block mb-1.5">
                Teléfono
              </label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="55 1234 5678" className={inputClasses} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* 👇 Campo agregado por la validación — confírmame si en tu original es select o input libre */}
            <div>
              <label className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm block mb-1.5">
                Asunto
              </label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Ej. Información sobre salas de reuniones" className={inputClasses} />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="font-['Poppins'] font-semibold text-[#1C1B1B] text-sm block mb-1.5">
                Mensaje
              </label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" rows={4} className={inputClasses} />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer border-none bg-[#1b236e] hover:bg-[#4f57a1] transition-colors text-white font-['Poppins'] font-semibold text-sm px-8 py-3.5 rounded-full mt-2 disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm text-center font-['Poppins']">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-['Poppins']">
                Hubo un error al enviar tu mensaje. Intenta de nuevo.
              </p>
            )}
                </form>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}