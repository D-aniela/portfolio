'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Card from './Card'
import { techIcons } from '../utils/helpers'

export default function AboutCard() {
  const { t } = useTranslation()
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
          height: '100%',
          maxWidth: '600px',
          maxHeight: '450px',
          minWidth: '580px',
          minHeight: '350px',
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
          padding: '32px',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: '25px',
            left: '32px',
            margin: 0,
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          {t('about.title')}
        </h2>

        {/* Texto */}
        <div
          style={{
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: 1.6,
            textAlign: 'left',
          }}
        >
          {/* <p>
            I’m a fullstack developer with a stronger focus on backend and
            application architecture.
          </p>

          <p>
            I have a background in Digital Design and Software Engineering,
            which allows me to understand both system logic and user experience.
          </p>

          <p>
            I focus on building scalable solutions, writing clean code, and
            developing stable, well-structured applications.
          </p> */}
          <p>{t('about.part1')}</p>
          <p>{t('about.part2')}</p>
          <p>{t('about.part3')}</p>
        </div>

        {/* Stack */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {Object.entries(techIcons).map(([name, icon], index) => (
            <div
              key={index}
              style={{
                padding: '6px 12px',
                fontSize: '12px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(4px)',
                letterSpacing: '0.5px',
              }}
            >
              <img
                src={icon}
                alt={name}
                style={{ width: '40px', height: '40px' }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </Card>
  )
}
