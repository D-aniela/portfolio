'use client'

import { useState } from 'react'
import AboutMe from './LandingPage/AboutMe'
import ExperienceCard from './LandingPage/Experience'
import AboutButton from './Buttons/AboutButton'

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
          <AboutButton
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            tab='about'
          />
          <AboutButton
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            tab='experienceTitle'
            borders={true}
          />
        </div>

        {/* Contenido dinámico */}
        <div className='flex-grow w-full mt-4'>
          {activeTab === 'about' && <AboutMe />}
          {activeTab === 'experienceTitle' && <ExperienceCard />}
        </div>
      </div>
    </section>
  )
}

export default AboutExperienceTabs
