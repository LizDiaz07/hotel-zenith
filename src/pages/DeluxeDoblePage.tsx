//import { useState } from "react";
import RoomDetailTemplate, { type RoomData } from "../components/habitaciones/RoomDetailTemplate";
//import ContactModal from "../components/ContactModal";
import { roomExcellenceItems } from "../data/roomExcellenceItems";

import heroDoble from "../assets/habitaciones/deluxe-doble/deluxe-doble.webp";
import galeria1 from "../assets/habitaciones/deluxe-doble/galeria-1.webp";
import galeria2 from "../assets/habitaciones/deluxe-doble/galeria-2.webp";
import galeria3 from "../assets/habitaciones/deluxe-doble/galeria-3.webp";
import galeria4 from "../assets/habitaciones/deluxe-doble/galeria-4.webp";
import galeria5 from "../assets/habitaciones/deluxe-doble/galeria-5.webp";
import galeria6 from "../assets/habitaciones/deluxe-doble/galeria-6.webp";

const deluxeDobleData: RoomData = {
  heroTitle: "Deluxe Doble",
  heroDescription:
    "Elegante, cómoda y funcional, pensada para brindar el descanso ideal durante tus viajes.",
  heroImage: heroDoble,
  introTitle: "Confort y calidez",
  introDescription:
    "Diseñada para compartir momentos especiales con los tuyos, la habitación Deluxe Doble ofrece el confort de sus dos camas matrimoniales y amenidades superiores, ideales para garantizar un descanso reparador y la máxima comodidad.",
  details: [
    { label: "Capacidad", value: "2 personas" },
    { label: "Tipo de cama", value: "2 camas matrimoniales" },
    { label: "Check-in", value: "3:00 PM" },
    { label: "Check-out", value: "12:00 PM" },
  ],
  galleryImages: [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6],
  excellenceItems: roomExcellenceItems,
  ctaSubtitle:
    "Elegante, cómoda y diseñada para brindar el descanso ideal durante tus viajes.",
};

export default function DeluxeDoblePage() {
  return <RoomDetailTemplate data={deluxeDobleData} />;
}
