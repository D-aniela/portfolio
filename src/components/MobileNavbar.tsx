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
    <>
      {/* 1. Botón de Hamburguesa (Solo visible cuando el menú está CERRADO) */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            ...boxStyle,
            position: 'fixed',
            top: '20px',
            left: '100px',
            padding: '12px',
          }}
          onClick={() => setIsOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
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
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </motion.div>
      )}

      {/* 2. Menú Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: '-100%' }} // Empieza arriba de la pantalla
            animate={{ y: 0 }} // Baja a su posición
            exit={{ y: '-100%' }} // Sube al cerrar
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: -50,
              left: -205,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(40px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '25px',
            }}
          >
            {/* Opciones del Menú */}
            {items.map((navItem, i) => {
              const isActive = activeItem === navItem.id
              return (
                <motion.div
                  key={navItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => {
                    setItem(navItem.id)
                    setIsOpen(false)
                  }}
                  style={{
                    ...boxStyle,
                    padding: '16px 40px',
                    fontSize: '20px',
                    width: '50%',
                    textAlign: 'center',
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

            {/* Selector de Idioma dentro del menú */}
            <motion.div
              style={{
                ...boxStyle,
                padding: '12px 20px',
                gap: '10px',
                marginTop: '10px',
              }}
              onClick={toggleLanguage}
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

            {/* BOTÓN DE CIERRE (X) AL FINAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                ...boxStyle,
                marginTop: '30px',
                padding: '15px',
                background: 'rgba(255, 0, 0, 0.1)', // Un toque sutil rojo opcional
              }}
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width='30'
                height='30'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar
