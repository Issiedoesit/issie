import React from 'react'
import JourneyCardFrame from '../../../reusables/Cards/JourneyCardFrame'
import JourneyCardImg from '../../../reusables/Cards/JourneyCardImg'
import JourneyCards from '../../../reusables/Cards/JourneyCards'
import SectionHeader from '../../../reusables/Text/Headers/SectionHeader'
import Designer from '../../../assets/media/illustrations/designer-illustrator-girl-working-at-her-desk-on-a-tablet.png'
import Group from '../../../assets/media/illustrations/young-women-sitting-with-laptop-on-the-table.png'
import Doctor from '../../../assets/media/illustrations/doctor-resting-on-book-stacks-on-floor.png'
import TechJourneySwiper from './TechJourneySwiper'
import useThemeStore from '../../../hooks/stores/useThemeStore'


const TechJourney = () => {
    const {variant} = useThemeStore(state=>state.theme)


  return (
<div id='techJourney' className={`${variant == 'light' && 'bg-gradient-to-b from-white via-brandPurple2x/40 to-brandPurple1x/40'}`}>
        <SectionHeader />
            <div className="py-20 w-full hidden md:block px-5 sm:px-10 lg:px-20">
            <div className='add-bg-1'>
                <JourneyCards bg={'add-bg-2'}>
                    <JourneyCardFrame img={Designer} altText={'Designer'} >
                    <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Colors and boxes and components</h3>
                    </JourneyCardFrame>
                    <JourneyCardImg img={Designer} altText={'Designer'} />
                </JourneyCards>
                <JourneyCards bg={'add-bg-2'}>
                    <JourneyCardImg img={Group} altText={'Group'} />
                    <JourneyCardFrame img={Group} altText={'Group'} header={'Got into Zuri Internship'} >
                        <ul>
                            <li><h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Switched to Frontend development</h3></li>
                        </ul>
                    </JourneyCardFrame>
                </JourneyCards>
                <JourneyCards  bg={'add-bg-2'}>
                    <JourneyCardFrame img={Doctor} altText={'Doctor'} header={'Back to school'} >
                    <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Optometry called</h3>
                    </JourneyCardFrame>
                    <JourneyCardImg img={Doctor} altText={'Doctor'} />
                </JourneyCards>
            </div>
            </div>
            <div className='w-full overflow-hidden block md:hidden py-20'>
                <TechJourneySwiper />
            </div>
    </div>
  )
}

export default TechJourney