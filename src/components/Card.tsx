import type { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {children}
    </div>
  )
}

export default Card
