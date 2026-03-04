// src/components/AnimatedText.tsx
import { motion, useScroll, useTransform } from 'motion/react'

export default function AnimatedText() {
  const { scrollYProgress } = useScroll()

  // Texto se separa
  const leftX = useTransform(scrollYProgress, [0, 1], ['0vw', '-100vw'])
  const rightX = useTransform(scrollYProgress, [0, 1], ['0vw', '100vw'])

  // Flecha se va hacia arriba y desaparece
  const arrowY = useTransform(scrollYProgress, [0, 0.2], ['0vh', '-100vh'])
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <div
      style={{
        width: '100vw',
        height: '200vh',
        background: '#111',
        color: 'white',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* TEXTO */}
        <div
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            display: 'flex',
          }}
        >
          <motion.span style={{ x: leftX, display: 'inline-block' }}>
            I'm a&nbsp;
          </motion.span>

          <motion.span style={{ x: rightX, display: 'inline-block' }}>
            developer
          </motion.span>
        </div>

        {/* FLECHA ANIMADA */}
        <motion.div
          style={{
            marginTop: '40px',
            y: arrowY,
            opacity: arrowOpacity,
          }}
        >
          <motion.img
            src='/svg/arrow-down.svg'
            alt='scroll down'
            width={60}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
