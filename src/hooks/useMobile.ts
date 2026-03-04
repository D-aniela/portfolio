'use client'

import { useSyncExternalStore } from 'react'

export const useIsMobile = (breakpoint: number = 768): boolean => {
  return useSyncExternalStore(
    // 1. Función de suscripción
    (callback) => {
      const mql = window.matchMedia(`(max-width: ${breakpoint}px)`)
      mql.addEventListener('change', callback)
      return () => mql.removeEventListener('change', callback)
    },
    // 2. Cómo obtener el valor en el cliente
    () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches,
    // 3. Valor inicial en el servidor (SSR)
    () => false,
  )
}
