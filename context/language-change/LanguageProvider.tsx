import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import Cookies from 'js-cookie'

import { languageReducer, LanguageContext } from './'
import i18n from '@/app/i18n-init'

export interface LanguageState {
  language: string
}

export const LanguageProvider: FC<
  PropsWithChildren & { initialLang: string }
> = ({ children, initialLang }) => {
  const [state, dispatch] = useReducer(languageReducer, {
    language: initialLang,
  })

  const changeLanguage = (lang: 'en' | 'es') => {
    Cookies.set('NEXT_LOCALE', lang) // Guarda el idioma en cookies
    i18n.changeLanguage(lang) // Cambia el idioma en i18next
    dispatch({ type: 'Language - ChangeLanguage', payload: lang }) // Actualiza el estado
  }

  useEffect(() => {
    i18n.changeLanguage(state.language)
    document.documentElement.lang = initialLang
  }, [state.language, i18n])

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
