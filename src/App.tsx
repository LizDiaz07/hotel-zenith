// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import InicioPage from './pages/InicioPage'
import TerrazaPage from './pages/TerrazaPage'
import SalasReunionesPage from './pages/SalasReunionesPage'
import DeluxeDoblePage from './pages/DeluxeDoblePage'
import DeluxeKingPage from './pages/DeluxeKingPage'
import AvisoPrivacidadPage from './pages/AvisoPrivacidadPage'
import TerminosCondicionesPage from './pages/TerminosCondicionesPage'
import SobreNosotrosPage from './pages/SobreNosotrosPage'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/habitaciones" element={<InicioPage />} />
        <Route path="/instalaciones" element={<InicioPage />} />
        <Route path="/servicios" element={<InicioPage />} />
        <Route path="/opiniones" element={<InicioPage />} />
        <Route path="/contacto" element={<InicioPage />} />

        <Route path="/terraza" element={<TerrazaPage />} />
        <Route path="/salas-reuniones" element={<SalasReunionesPage />} />
        <Route path="/habitaciones/deluxe-doble" element={<DeluxeDoblePage />} />
        <Route path="/habitaciones/deluxe-king" element={<DeluxeKingPage />} />
        <Route path="/privacidad" element={<AvisoPrivacidadPage />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondicionesPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      </Routes>
       <FloatingWhatsAppButton />
    </BrowserRouter>
  )
}

export default App