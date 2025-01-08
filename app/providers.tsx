'use client'

import { LanguageProvider } from '@/context/language-change'
import * as React from 'react'

export function Providers({
  children,
  language = 'en',
}: {
  children: React.ReactNode
  language: string
}) {
  return (
    <>
      <LanguageProvider initialLang={language}>{children}</LanguageProvider>
    </>
  )
}
