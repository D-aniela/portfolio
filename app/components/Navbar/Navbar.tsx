'use client'

import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang)
    Cookies.set('NEXT_LOCALE', lang) // Guarda el idioma seleccionado
  }

  return (
    <nav>
      <div>{t('welcome')}</div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
    </nav>
  )
}

export default Navbar
