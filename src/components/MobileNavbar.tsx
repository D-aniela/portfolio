import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface Props {
  boxStyle: React.CSSProperties
  items: { id: number; label: string }[]
  item: number
  setItem: (item: number) => void
  toggleLanguage: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isEnglish: boolean
}

const MobileNavbar = ({
  boxStyle,
  items,
  item: activeItem,
  setItem,
  toggleLanguage,
  isOpen,
  setIsOpen,
  isEnglish,
}: Props) => {
  const { t } = useTranslation()

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* Controles Flotantes: Idioma + Hamburguesa */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <motion.div
          style={{
            ...boxStyle,
            padding: '10px 14px',
            fontSize: '14px',
            gap: '6px',
          }}
          onClick={toggleLanguage}
          whileTap={{ scale: 0.95 }}
        >
          <span
            style={{
              opacity: isEnglish ? 1 : 0.5,
              textDecoration: isEnglish ? 'underline' : 'none',
            }}
          >
            EN
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span
            style={{
              opacity: !isEnglish ? 1 : 0.5,
              textDecoration: !isEnglish ? 'underline' : 'none',
            }}
          >
            ES
          </span>
        </motion.div>

        <motion.div
          style={{ ...boxStyle, padding: '10px' }}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {/* Ícono de Hamburguesa (Si está cerrado) o una "X" (Si está abierto) */}
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {isOpen ? (
              <>
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </>
            ) : (
              <>
                <line x1='3' y1='12' x2='21' y2='12'></line>
                <line x1='3' y1='6' x2='21' y2='6'></line>
                <line x1='3' y1='18' x2='21' y2='18'></line>
              </>
            )}
          </svg>
        </motion.div>
      </div>

      {/* Menú Desplegable con Animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(40px)',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {items.map((navItem) => {
              const isActive = activeItem === navItem.id
              return (
                <motion.div
                  key={navItem.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setItem(navItem.id)
                    setIsOpen(false) // Cierra el menú al seleccionar una opción
                  }}
                  style={{
                    ...boxStyle,
                    padding: '12px 24px',
                    background: isActive
                      ? 'rgba(255,255,255,0.2)'
                      : boxStyle.background,
                    border: isActive
                      ? '1px solid rgba(255,255,255,0.4)'
                      : boxStyle.border,
                  }}
                >
                  {t(navItem.label)}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MobileNavbar
