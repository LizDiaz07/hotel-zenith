import { whatsappUrl } from "../config/contact";

const IconWhatsApp = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14a2.9 2.9 0 0 1-2 1.45c-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.58c.19 0 .43-.07.68.52.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.31.31-.13.6.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.37 2.45 1.52.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.73-.16 1.4Z" />
  </svg>
);

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <span
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap
        bg-[#1B236E] text-white text-sm font-medium px-3 py-1.5 rounded-lg
        opacity-0 translate-x-2 pointer-events-none
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300 ease-out shadow-lg"
      >
        Reserva ahora
        {/* Flechita del tooltip */}
        <span
          className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2
          bg-[#1B236E] rotate-45"
        />
      </span>

      {/* Botón */}
      
        <a href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="whatsapp-bounce relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_4px_16px_rgba(0,0,0,0.25),0_0_0_1px_rgba(37,211,102,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(37,211,102,0.2)] flex items-center justify-center transition-all hover:scale-110"
        
      >
        
        <IconWhatsApp className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </a>
    </div>
  );
}