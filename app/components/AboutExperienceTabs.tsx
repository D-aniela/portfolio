'use client'

import { useState } from 'react'
import AboutMe from './LandingPage/AboutMe'
import ExperienceCard from './LandingPage/Experience'

const AboutExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState('about') // Estado para el botón activo

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <section
      id='about'
      className='bg-foreground h-[35rem] text-white flex flex-col'
    >
      <div className='flex flex-col items-center justify-center space-y-4 mt-10'>
        {/* Botones */}
        <div className='flex'>
          <button
            style={{
              borderRadius: '36px 0 0 36px',
              height: '82px',
              width: '250px',
              border: '1px solid #384955',
            }}
            className={`px-4 py-2 font-semibold transition-all duration-300 text-3xl ${
              activeTab === 'about'
                ? 'bg-graybg text-foreground font-fiolaregular' // Estilo para el botón activo
                : 'bg-graybg text-foreground hover:bg-gray-300 font-fiolalisa'
            }`}
            onClick={() => handleTabChange('about')}
          >
            Sobre Mi
          </button>
          <button
            style={{
              borderRadius: '0 36px 36px 0',
              height: '82px',
              width: '250px',
              border: '1px solid #384955',
            }}
            className={`px-4 py-2 font-semibold transition-all duration-300 text-3xl ${
              activeTab === 'experience'
                ? 'bg-graybg text-foreground font-fiolaregular' // Estilo para el botón activo
                : 'bg-graybg text-foreground hover:bg-gray-300 font-fiolalisa'
            }`}
            onClick={() => handleTabChange('experience')}
          >
            Experiencia
          </button>
        </div>

        {/* Contenido dinámico */}
        <div className='flex-grow w-full mt-4'>
          {activeTab === 'about' && <AboutMe />}
          {activeTab === 'experience' && <ExperienceCard />}
        </div>
      </div>
    </section>
  )
}

export default AboutExperienceTabs
