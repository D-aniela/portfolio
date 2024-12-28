'use client'
import React, { useState } from 'react'
import navLinks from '../navConfig'
import MobileMenu from './MobileMenu'
import Hamburger from './Hamburguer'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-background text-primary text-sm fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        {/* Links - Desktop */}
        <div className='font-fiolaregular hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className='hover:text-gray-400'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburguesa - Mobile */}
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu isOpen={isOpen} />}
    </nav>
  )
}

export default Navbar
