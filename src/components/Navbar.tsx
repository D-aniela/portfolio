'use client'

import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface Props {
  items: { id: number; label: string }[]
  item: number
  setItem: (item: number) => void
}

const boxStyle = {
  borderRadius: '999px',
  backdropFilter: 'blur(20px)',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
  color: 'white',
  fontFamily: 'sans-serif',
  fontWeight: 500,
  cursor: 'pointer',
}

export default function BubbleNavbar({ items, setItem }: Props) {
  const { t, i18n } = useTranslation()
  console.log(i18n.language)

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'nowrap',
        zIndex: 20,
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: i * 0.12,
            type: 'spring',
            stiffness: 260,
            damping: 10,
          }}
          whileHover={{
            y: -8,
            scale: 1.1,
            transition: { type: 'spring', stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            ...boxStyle,
            padding: '12px 26px',
            borderRadius: '999px',
          }}
          onClick={() => setItem(item.id)}
        >
          {t(item.label)}
        </motion.div>
      ))}
      <div
        style={{
          ...boxStyle,
          width: '90px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
        }}
        onClick={() => {
          if (i18n.language.includes('en')) {
            i18n.changeLanguage('es')
          } else {
            i18n.changeLanguage('en')
          }
        }}
      >
        <img src='/svg/language.svg' alt='' width={20} />
        {i18n.language.includes('en') ? (
          <>
            <span
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              EN
            </span>
            | <span>ES</span>
          </>
        ) : (
          <>
            <span
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              EN
            </span>
            |{' '}
            <span
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              ES
            </span>
          </>
        )}
        {/* <span>EN</span> | <span>ES</span> */}
      </div>
    </div>
  )
}
