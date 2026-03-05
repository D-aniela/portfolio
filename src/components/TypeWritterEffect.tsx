'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../hooks/useMobile'
import { AnimatePresence, motion } from 'motion/react'

export default function TypewriterEffect() {
  const { t } = useTranslation()
  const isMobile = useIsMobile(768)

  const wordsSequence = [
    t('me.dev'),
    t('me.stack'),
    t('me.digital'),
    t('me.front'),
    t('me.prob'),
    t('me.creative'),
    t('me.explorer'),
    t('me.eternal'),
    t('me.software'),
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordsSequence.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [wordsSequence.length])

  // Estilo común para el texto
  const textStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : '60px',
    fontWeight: 600,
    color: 'white',
    position: 'absolute',
    top: isMobile ? '-200%' : '50%',
    transform: 'translateY(-50%)',
    whiteSpace: 'nowrap',
    textShadow: '0px 2px 10px rgba(0,0,0,0.5)', // Mejora legibilidad sobre el fondo
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100px', // Espacio suficiente para que no corte la animación
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* 1. "I'm a" a la IZQUIERDA del centro */}
      <span
        style={{
          ...textStyle,
          right: isMobile ? '40px' : 'calc(50% + 180px)',
          opacity: 0.9,
        }}
      >
        {t('me.im')}
      </span>

      {/* 2. Cargos dinámicos a la DERECHA del centro */}
      <div
        style={{
          ...textStyle,
          left: isMobile ? '-20px' : 'calc(50% + 180px)',
          height: isMobile ? '22px' : '32px',
          width: isMobile ? '150px' : '300px',
        }}
      >
        <AnimatePresence mode='popLayout'>
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              color: '#ffffff', // Color azul de tu diseño
              display: 'block',
            }}
          >
            {wordsSequence[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
