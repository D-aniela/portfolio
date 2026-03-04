import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, useScroll } from 'motion/react'

import SvgMesh from './components/SvgMesh'
import BackgroundMotion from './components/BackgroudMotion'
import BubbleNavbar from './components/Navbar'
import AboutCard from './components/AboutCard'
import TimelineScroll from './components/TimelineScroll'
import { items } from './utils/helpers'

export default function App() {
  const { scrollYProgress } = useScroll()
  const [showSvg, setShowSvg] = useState(false)
  const [item, setItem] = useState(1)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v > 0.4) {
        setShowSvg(true)
      } else {
        setShowSvg(false)
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
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
            position: 'relative',
            overflow: '100vh',
          }}
        >
          {/* Fondo */}
          <BackgroundMotion />

          {/* Navbar encima */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <BubbleNavbar items={items} item={item} setItem={setItem} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: item === 2 ? '70%' : item === 3 ? '35%' : 0,
              transform: 'translateX(-50%)',
              zIndex: 5,
            }}
          >
            <AnimatePresence>
              {item === 2 && <AboutCard key='about' />}
              {item === 3 && <TimelineScroll key='timeline' />}
            </AnimatePresence>
          </div>
        </div>

        {/* Canvas con transparency */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <SvgMesh url='/svg/portfolio.svg' visible={showSvg} item={item} />
          </Canvas>
        </div>
      </div>
    </>
  )
}
