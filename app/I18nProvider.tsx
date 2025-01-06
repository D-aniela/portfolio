'use client'

import { useEffect, useState } from 'react'
import i18n from './i18n-init'

export function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode
  initialLang: string
}) {
  const [currentLang, setCurrentLang] = useState(initialLang)

  useEffect(() => {
    i18n.changeLanguage(currentLang) // Change initial language
  }, [currentLang])

  return (
    <html lang={currentLang}>
      <head />
      <body>{children}</body>
    </html>
  )
}
