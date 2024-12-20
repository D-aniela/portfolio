'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import navLinks from '../navConfig'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-background text-primary text-sm'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        {/* Links - Desktop */}
        <div className='font-fiolaregular hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className='hover:text-gray-400'
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburguesa - Mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-800'>
          <div className='flex flex-col items-center space-y-4 py-4'>
            <Link className='hover:text-gray-400' href='/inicio'>
              Inicio
            </Link>
            <Link className='hover:text-gray-400' href='/nosotros'>
              Nosotros
            </Link>
            <Link className='hover:text-gray-400' href='/servicios'>
              Servicios
            </Link>
            <Link className='hover:text-gray-400' href='/contacto'>
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
