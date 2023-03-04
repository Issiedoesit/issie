import React from 'react'
import JourneyCardFrame from '../../../reusables/Cards/JourneyCardFrame'
import JourneyCardImg from '../../../reusables/Cards/JourneyCardImg'
import JourneyCards from '../../../reusables/Cards/JourneyCards'
import SectionHeader from '../../../reusables/Text/Headers/SectionHeader'
import TechJourneySwiper from './TechJourneySwiper'
import useThemeStore from '../../../hooks/stores/useThemeStore'
import Journey from '../../../data/Journey'


const TechJourney = () => {
    const {variant} = useThemeStore(state=>state.theme)


  return (
<div id='techJourney' className={`${variant == 'light' && 'md:bg-gradient-to-b from-white via-brandPurple2x/40 to-brandPurple1x/40'}`}>
        <SectionHeader />
            <div className="py-20 w-full hidden md:block px-5 sm:px-10 lg:px-20">
            <div className='add-bg-1'>
                {Journey.map((stop, i)=>{
                        if(i % 2 == 0 || i == 0){
                            return  <JourneyCards bg={'add-bg-2'}>
                            <JourneyCardFrame img={stop.img} altText={stop.name} header={stop.header + ' ' + i}>
                            <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x text-center'>{stop.info}</h3>
                            </JourneyCardFrame>
                            <JourneyCardImg img={stop.img} altText={stop.name} />
                            </JourneyCards>
                        }else{
                            return <JourneyCards  bg={'add-bg-2'}>
                                <JourneyCardImg img={stop.img} altText={stop.name} />
                                <JourneyCardFrame img={stop.img} altText={stop.name} header={stop.header + ' ' + i} >
                                <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x text-center'>{stop.info}</h3>
                                </JourneyCardFrame>
                            </JourneyCards>
                        }
                })}
            </div>
            </div>
            <div className='w-full overflow-hidden block md:hidden py-20'>
                <TechJourneySwiper />
            </div>
    </div>
  )
}

export default TechJourney