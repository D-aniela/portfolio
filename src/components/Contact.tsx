import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../hooks/useMobile'
import Card from './Card'
import { motion } from 'motion/react'
import { contactIcons } from '../utils/helpers'

const Contact = () => {
  const isMobile = useIsMobile(768)
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
          maxWidth: isMobile ? '80vw' : '700px',
          height: isMobile ? '400px' : '250px',
          position: 'relative',
          left: isMobile ? '50%' : '50%',
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
          {t('contact.title')}
        </h2>

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '10px',
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}
        >
          {Object.entries(contactIcons).map(([name, icon], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Aprovechando las utilidades de motion
              style={{
                padding: '6px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={icon.img}
                alt={name}
                title={name}
                style={{
                  width: isMobile ? '80px' : '211px',
                  height: isMobile ? '80px' : '211px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                onClick={() => window.open(icon.link, '_blank')}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Card>
  )
}

export default Contact
