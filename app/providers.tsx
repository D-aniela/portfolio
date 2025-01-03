'use client'

import { LanguageProvider } from '@/context/language-change'
import * as React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageProvider>{children}</LanguageProvider>
    </>
  )
}
