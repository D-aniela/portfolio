import { createContext } from 'react'

interface ContextProps {
  language: string

  changeLanguage: (lang: 'en' | 'es') => void
}

export const LanguageContext = createContext({} as ContextProps)
