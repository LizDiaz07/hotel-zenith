export const contactInfo = {
  hotelNamefacebook: "Hotel ZENITH",
  hotelNameInstagram:"hotelzenith_ tehuacan",
  addressLine1: "1 Poniente 113, Col. Centro",
  addressLine2: "75700 Tehuacán, Puebla",
  addressFull: "Calle 1 Pte 113, Centro de la Ciudad, 75700 Tehuacán, Pue., México",
  phones: [
    { display: "+52 238 3840130", tel: "+522383840130" },
    { display: "+52 238 3821217", tel: "+522383821217" },
  ],
  whatsapp: {
    display: "+52 238 168 6528",
    number: "522381686528",
    message: "Hola, me gustaría obtener más información sobre Hotel ZENITH.",
  },
  email: "recepcion@hotelzenith.com.mx",
  social: {
    instagram: "https://www.instagram.com/hotelzenith_tehuacan",
    facebook: "https://www.facebook.com/Hotel.Zenith.Th",
  },
};

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contactInfo.addressFull
)}&output=embed`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  contactInfo.addressFull
)}`;

export const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(
  contactInfo.whatsapp.message
)}`;