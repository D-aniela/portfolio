'use client'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import { useIsMobile } from '../hooks/useMobile'

interface Props {
  items: { id: number; label: string }[]
  item: number
  setItem: (item: number) => void
}

const boxStyle = {
  borderRadius: '999px',
  backdropFilter: 'blur(20px)',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
  color: 'white',
  fontFamily: 'sans-serif',
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap' as const,
}

export default function BubbleNavbar({
  items,
  item: activeItem,
  setItem,
}: Props) {
  const { i18n } = useTranslation()
  const isMobile = useIsMobile(768)
  const [isOpen, setIsOpen] = useState(false)

  // Detectar el tamaño de la pantalla
  const isMenuOpen = isMobile && isOpen

  const handleSetOpen = (value: boolean) => {
    setIsOpen(value)
  }

  const isEnglish = i18n.language.includes('en')

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en')
  }

  // === RENDERIZADO PARA MÓVIL (HAMBURGUESA) ===
  if (isMobile) {
    return (
      <MobileNavbar
        boxStyle={boxStyle}
        items={items}
        item={activeItem}
        setItem={setItem}
        toggleLanguage={toggleLanguage}
        isOpen={isMenuOpen}
        setIsOpen={handleSetOpen}
        isEnglish={isEnglish}
      />
    )
  }

  // === RENDERIZADO PARA ESCRITORIO (NORMAL) ===
  return (
    <DesktopNavbar
      boxStyle={boxStyle}
      items={items}
      item={activeItem}
      setItem={setItem}
      toggleLanguage={toggleLanguage}
      isEnglish={isEnglish}
    />
  )
}
