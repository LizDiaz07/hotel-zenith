import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const sectionMap: Record<string, string> = {
  '/habitaciones': 'habitaciones',
  '/instalaciones': 'instalaciones',
  '/servicios': 'servicios',
  '/opiniones': 'opiniones',
  '/contacto': 'contacto',
}

function ScrollToTop() {
  const { pathname, key } = useLocation()

  // Desactiva el scroll restoration nativo del navegador
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const sectionId = sectionMap[pathname]

    if (sectionId) {
      const timeout = setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 20
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 150)

      return () => clearTimeout(timeout)
    }

    // Si es la home u otra página → sube al inicio
    window.scrollTo(0, 0)
  }, [pathname, key])

  return null
}

export default ScrollToTop