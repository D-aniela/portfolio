'use client'

import Header from './components/LandingPage/Header'
import AboutExperienceTabs from './components/AboutExperienceTabs'
import MyProjects from './components/LandingPage/MyProjects'

export default function Home() {
  return (
    <>
      <Header />
      <AboutExperienceTabs />
      <MyProjects />
    </>
  )
}
