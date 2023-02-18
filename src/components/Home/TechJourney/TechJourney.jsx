import React from 'react'
import JourneyCardFrame from '../../../reusables/Cards/JourneyCardFrame'
import JourneyCardImg from '../../../reusables/Cards/JourneyCardImg'
import JourneyCards from '../../../reusables/Cards/JourneyCards'
import SectionHeader from '../../../reusables/Text/Headers/SectionHeader'
import SectionWrap from '../../../reusables/Wraps/SectionWrap'
import Designer from '../../../assets/media/illustrations/designer-illustrator-girl-working-at-her-desk-on-a-tablet.png'
import Group from '../../../assets/media/illustrations/young-women-sitting-with-laptop-on-the-table.png'
import Doctor from '../../../assets/media/illustrations/doctor-resting-on-book-stacks-on-floor.png'
import TechJourneySwiper from './TechJourneySwiper'


const TechJourney = () => {
  return (
    <SectionWrap>
        <SectionHeader />
        <div className='py-20 w-full hidden md:block'>
            <JourneyCards>
                <JourneyCardFrame img={Designer} altText={'Designer'} >
                <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Colors and boxes and components</h3>
                </JourneyCardFrame>
                <JourneyCardImg img={Designer} altText={'Designer'} />
            </JourneyCards>
            <JourneyCards>
                <JourneyCardImg img={Group} altText={'Group'} />
                <JourneyCardFrame img={Group} altText={'Group'} header={'Got into Zuri Internship'} >
                    <ul>
                        <li><h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Switched to Frontend development</h3></li>
                    </ul>
                </JourneyCardFrame>
            </JourneyCards>
            <JourneyCards>
                <JourneyCardFrame img={Doctor} altText={'Doctor'} header={'Back to school'} >
                <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x'>Optometry called</h3>
                </JourneyCardFrame>
                <JourneyCardImg img={Doctor} altText={'Doctor'} />
            </JourneyCards>
        </div>
        <div className='w-full overflow-hidden block md:hidden py-20'>
            <TechJourneySwiper />
        </div>
    </SectionWrap>
  )
}

export default TechJourney