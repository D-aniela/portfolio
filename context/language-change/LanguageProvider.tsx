import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { useTranslation } from 'next-i18next'
import Cookies from 'js-cookie'

import { languageReducer, LanguageContext } from './'

export interface LanguageState {
  language: string
}

const LANGUAGE_INITIAL_STATE: LanguageState = {
  language: 'en',
}

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, LANGUAGE_INITIAL_STATE)
  const { i18n } = useTranslation()

  // const setLanguage = (lang: string) => {
  //   console.log('Setting language to:', lang)
  //   dispatch({ type: 'Language - SetLanguage', payload: lang })
  // }

  const changeLanguage = (lang: 'en' | 'es') => {
    Cookies.set('NEXT_LOCALE', lang) // Guarda el idioma en cookies
    i18n.changeLanguage(lang) // Cambia el idioma en i18next
    dispatch({ type: 'Language - ChangeLanguage', payload: lang }) // Actualiza el estado
  }

  useEffect(() => {
    const savedLang = Cookies.get('NEXT_LOCALE') || 'en'
    i18n.changeLanguage(savedLang)
    dispatch({ type: 'Language - SetLanguage', payload: savedLang })
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        ...state,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
