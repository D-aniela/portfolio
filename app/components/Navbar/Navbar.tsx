'use client'
import React, { useContext, useState } from 'react'
import navLinks from '../navConfig'
import MobileMenu from './MobileMenu'
import Hamburger from './Hamburguer'
import { LanguageContext } from '@/context/language-change'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { changeLanguage } = useContext(LanguageContext)

  const { t } = useTranslation()

  return (
    <nav className='bg-background text-primary text-sm fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        {/* Links - Desktop */}
        <div
          suppressHydrationWarning
          className='font-fiolaregular hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6'
        >
          {navLinks.map((link) => (
            <a
              suppressHydrationWarning
              key={link.href}
              href={`#${link.href}`}
              className='hover:text-gray-400'
            >
              {t(link.href)}
            </a>
          ))}
        </div>

        {/* Hamburguesa - Mobile */}
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Language Options */}
        <div className='flex space-x-4 items-center'>
          <button
            onClick={() => changeLanguage('en')}
            className='hover:text-gray-400 font-medium'
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className='hover:text-gray-400 font-medium'
          >
            ES
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu isOpen={isOpen} />}
    </nav>
  )
}

export default Navbar
