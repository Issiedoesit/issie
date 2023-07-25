import React from 'react'
import HeroHome from './HeroHome'
import TechJourney from './TechJourney/TechJourney'
import useDocTitle from '../../hooks/DocumentTitle'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const Home = () => {
  useDocTitle('Issie | Welcome to my Portfolio Page')
  

  return (
    <div>
        <HeroHome />
        <TechJourney />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home