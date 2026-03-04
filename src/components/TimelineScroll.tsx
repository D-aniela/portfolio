'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../hooks/useMobile'

import Card from './Card'
import { techIcons } from '../utils/helpers'

export default function TimelineScroll() {
  const { t } = useTranslation()
  const isMobile = useIsMobile(768)
  const ref = useRef<HTMLDivElement>(null)

  const events = [
    { year: '2017', text: t('timeline.text1') },
    {
      year: '2020',
      text: t('timeline.text2'),
      stack: ['react', 'js', 'mongo'],
    },
    {
      year: '2020',
      text: t('timeline.text3'),
      stack: ['react', 'js', 'firebase', 'node'],
    },
    {
      year: '2021 — 2024',
      text: t('timeline.text4'),
      stack: [
        'docker',
        'js',
        'mongo',
        'mysql',
        'nestjs',
        'nextjs',
        'react',
        'sql',
        'ts',
        'node',
      ],
    },
    { year: '2022', text: t('timeline.text5') },
    {
      year: '2024',
      text: t('timeline.text6'),
      stack: ['ts', 'nextjs', 'firebase', 'node'],
      link: 'https://crowneo.com/',
    },
    {
      year: '2025',
      text: t('timeline.text7'),
      stack: ['ts', 'nextjs', 'firebase', 'node'],
      link: 'https://www.dijo.mx/',
    },
    { year: 'Ahora', text: t('timeline.text8') },
  ]

  return (
    <Card>
      <div
        className='custom-scroll'
        ref={ref}
        style={{
          width: '100%',
          maxWidth: isMobile ? '90vw' : '700px',
          height: isMobile ? '600px' : '250px',
          overflowX: 'hidden',
          overflowY: 'auto',
          position: 'relative',
          left: isMobile ? '15%' : 0,
          padding: isMobile ? '40px 0' : '80px 0',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'rgba(255,255,255,0.1)',
              zIndex: 0,
            }}
          />
        )}

        {events.map((event, index) => (
          <TimelineItem
            key={index}
            event={event}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>
    </Card>
  )
}

function TimelineItem({
  event,
  index,
  isMobile,
}: {
  event: { year: string; text: string; stack?: string[]; link?: string }
  index: number
  isMobile: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50px' })

  // En móvil, forzamos que todos parezcan estar a la "derecha" de la línea
  const isLeft = !isMobile && index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isMobile ? -20 : isLeft ? 40 : -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        display: 'flex',
        // En móvil todo va a la derecha para dejar espacio al año
        justifyContent: isMobile
          ? 'flex-end'
          : isLeft
            ? 'flex-end'
            : 'flex-start',
        marginBottom: isMobile ? '60px' : '100px',
        padding: isMobile ? '0 20px 0 60px' : '0 40px',
        color: 'white',
        zIndex: 1,
      }}
    >
      {/* Texto Contenedor */}
      <div
        style={{
          width: isMobile ? '100%' : '40%',
          textAlign: isLeft ? 'right' : 'left',
        }}
      >
        <p style={{ fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
          {event.text}
        </p>

        {event.link && (
          <a
            href={event.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              marginTop: '10px',
              fontSize: '12px',
              color: '#60a5fa',
              textDecoration: 'none',
            }}
          >
            {isMobile ? 'Link ↗' : 'Ver más'}
          </a>
        )}

        {/* Stack con Wrap para que no se salga en móvil */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '12px',
            justifyContent: isLeft ? 'flex-end' : 'flex-start',
          }}
        >
          {event.stack?.map((tech: string, i: number) => (
            <div
              key={i}
              style={{ width: '18px', height: '18px', opacity: 0.6 }}
            >
              <img
                src={techIcons[tech]}
                alt={tech}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Año (Burbuja indicadora) */}
      <div
        style={{
          position: 'absolute',
          // En móvil la ponemos fija a la izquierda
          left: isMobile ? '30px' : '50%',
          top: '0',
          transform: isMobile ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
          background: 'rgba(255,255,255,0.1)',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '10px',
          fontWeight: 'bold',
          letterSpacing: isMobile ? '1px' : '2px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          whiteSpace: 'nowrap',
        }}
      >
        {event.year}
      </div>
    </motion.div>
  )
}
