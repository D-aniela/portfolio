'use client'

import { useEffect } from 'react'
import i18n from './i18n-init'

export function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode
  initialLang: string
}) {
  useEffect(() => {
    i18n.changeLanguage(initialLang) // Cambia el idioma en i18n
    document.documentElement.lang = initialLang // Actualiza el atributo lang de <html>
  }, [initialLang])

  return <>{children}</>
}
