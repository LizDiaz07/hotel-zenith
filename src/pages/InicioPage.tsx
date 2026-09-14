// src/pages/InicioPage.tsx
import TopNavigationBar from '../components/TopNavigationBar'
import HeroSection from '../components/HeroSection'
import BusinessTravelersSection from '../components/BusinessTravelersSection'
import InstalacionesSection from '../components/InstalacionesSection'
import RoomsSection from '../components/RoomsSection'
import ServiciosSection from '../components/ServiciosSection'
import OpinionesSection from '../components/OpinionesSection'
import ContactoSection from '../components/ContactoSection'
import Footer from '../components/Footer'

function InicioPage() {
  return (
    <div className='relative'>
      <TopNavigationBar />
      <HeroSection />
      <BusinessTravelersSection />
      <InstalacionesSection />
      <RoomsSection />
      <ServiciosSection />
      <OpinionesSection />
      <ContactoSection />
      <Footer />
    </div>
  )
}

export default InicioPage