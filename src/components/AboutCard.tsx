'use client'

import { motion } from 'motion/react' // Nueva forma de importar
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../hooks/useMobile'

import Card from './Card'
import { techIcons } from '../utils/helpers'

export default function AboutCard() {
  const { t } = useTranslation()
  const isMobile = useIsMobile(768)

  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: '100%',
          maxWidth: isMobile ? '80vw' : '600px',
          minWidth: isMobile ? 'auto' : '580px',
          minHeight: isMobile ? 'auto' : '350px',
          position: 'relative',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          // Ajuste de espacio: más aire arriba en móvil para el título absoluto
          padding: isMobile ? '65px 20px 25px 20px' : '32px',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: isMobile ? '18px' : '25px',
            left: isMobile ? '20px' : '32px',
            margin: 0,
            fontSize: isMobile ? '18px' : '22px',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          {t('about.title')}
        </h2>

        {/* Texto con tipografía fluida */}
        <div
          style={{
            fontSize: isMobile ? '14px' : '15px',
            lineHeight: 1.6,
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '12px' }}>{t('about.part1')}</p>
          <p style={{ marginBottom: '12px' }}>{t('about.part2')}</p>
          <p>{t('about.part3')}</p>
        </div>

        {/* Stack de Tecnologías */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '8px' : '10px',
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}
        >
          {Object.entries(techIcons).map(([name, icon], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Aprovechando las utilidades de motion
              style={{
                padding: '6px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={icon}
                alt={name}
                title={name}
                style={{
                  width: isMobile ? '30px' : '35px',
                  height: isMobile ? '30px' : '35px',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Card>
  )
}
