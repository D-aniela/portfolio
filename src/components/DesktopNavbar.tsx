import React from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface Props {
  boxStyle: React.CSSProperties
  items: { id: number; label: string }[]
  item: number
  setItem: (item: number) => void
  toggleLanguage: () => void
  isEnglish: boolean
}

const DesktopNavbar = ({
  boxStyle,
  items,
  item: activeItem,
  setItem,
  toggleLanguage,
  isEnglish,
}: Props) => {
  const { t } = useTranslation()

  return (
    <nav
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        {items.map((navItem, i) => {
          const isActive = activeItem === navItem.id
          return (
            <motion.div
              key={navItem.id}
              initial={{ opacity: 0, y: -40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: i * 0.12,
                type: 'spring',
                stiffness: 260,
                damping: 10,
              }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...boxStyle,
                padding: '12px 26px',
                background: isActive
                  ? 'rgba(255,255,255,0.2)'
                  : boxStyle.background,
                border: isActive
                  ? '1px solid rgba(255,255,255,0.4)'
                  : boxStyle.border,
              }}
              onClick={() => setItem(navItem.id)}
            >
              {t(navItem.label)}
            </motion.div>
          )
        })}
      </div>

      {/* Selector de Idioma Escritorio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ ...boxStyle, gap: '8px', padding: '12px 20px' }}
        onClick={toggleLanguage}
      >
        <img src='/svg/language.svg' alt='' width={20} />
        <span
          style={{
            textDecoration: isEnglish ? 'underline' : 'none',
            opacity: isEnglish ? 1 : 0.5,
          }}
        >
          EN
        </span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span
          style={{
            textDecoration: !isEnglish ? 'underline' : 'none',
            opacity: !isEnglish ? 1 : 0.5,
          }}
        >
          ES
        </span>
      </motion.div>
    </nav>
  )
}

export default DesktopNavbar
