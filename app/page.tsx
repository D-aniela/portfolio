'use client'

import AboutExperienceTabs from './components/AboutExperienceTabs'
// import AboutMe from './components/LandingPage/AboutMe'
import Header from './components/LandingPage/Header'
import MyProjects from './components/LandingPage/MyProjects'

export default function Home() {
  return (
    <>
      <Header />
      <AboutExperienceTabs />
      {/* <AboutMe /> */}
      <MyProjects />
    </>
  )
}
