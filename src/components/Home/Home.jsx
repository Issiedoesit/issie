import React from 'react'
import HeroHome from './HeroHome'
import TechJourney from './TechJourney/TechJourney'
import useDocTitle from '../../hooks/DocumentTitle'
import Projects from './Projects/Projects'

const Home = () => {
  useDocTitle('Issie | Welcome to my Portfolio Page')
  

  return (
    <div>
        <HeroHome />
        <TechJourney />
        <Projects />
    </div>
  )
}

export default Home