import React from 'react'
import HeroHome from './HeroHome'
import TechJourney from './TechJourney/TechJourney'
import useDocTitle from '../../hooks/DocumentTitle'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import {SuperSEO} from 'react-super-seo'


const Home = () => {
  useDocTitle('Issie | Welcome to my Portfolio Page')

  
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": `${import.meta.env.VITE_APP_PATH}`,
    "logo": "/src/assets/media/logos/IssieLogoBlack.png"
  }

  
  

  return (
    <div>

      <SuperSEO
        title="Isioma Ekwemuka"
        description="Isioma Ekwemuka, Frontend Developer (Html, CSS, Javascript, Jquery, React, NodeJS) in Nigeria."
        lang="en"
        
        openGraph={{
          ogUrl:`${import.meta.env.VITE_APP_PATH}`,
          ogTitle:"Isioma Ekwemuka",
          ogDescription:"Isioma Ekwemuka, Frontend Developer (Html, CSS, Javascript, Jquery, React, NodeJS) in Nigeria."
        }}
        twitter={{
          twitterSummaryCardWithLargeImage:{
            summaryCardImageAlt: "Isioma Ekwemuka",
            summaryCardSiteUsername: "@issie_tbh",
            summaryCardDescription: "Isioma Ekwemuka, Frontend Developer (Html, CSS, Javascript, Jquery, React, NodeJS) in Nigeria.",
            summaryCardTitle:"Isioma Ekwemuka",
          },
        }}
      >
        <meta name="keywords" content="isioma, issie, isioma ekwemuka, frontend, react, developer, frontend developer, issie_tbh, jquery, javascript, html, html5, css" />
        <meta property="og:url" content={`${import.meta.env.VITE_APP_PATH}`} />

        <link rel="canonical" href={`${import.meta.env.VITE_APP_PATH}`} />

          <script type="application/ld+json">
            {JSON.stringify(jsonLdData)}
          </script>

      </SuperSEO>

        <HeroHome />
        <TechJourney />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home