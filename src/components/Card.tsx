import type { ReactNode, CSSProperties } from 'react'
import { useIsMobile } from '../hooks/useMobile'

const Card = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile(768)

  const boxStyle: CSSProperties = isMobile
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '90vh',
      }
    : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }

  return <div style={{ ...boxStyle }}>{children}</div>
}

export default Card
