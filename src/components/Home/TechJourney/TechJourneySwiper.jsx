import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import SectionHeader from "../../../reusables/Text/Headers/SectionHeader";
import Designer from '../../../assets/media/illustrations/designer-illustrator-girl-working-at-her-desk-on-a-tablet.png'
import Group from '../../../assets/media/illustrations/young-women-sitting-with-laptop-on-the-table.png'
import JourneyCardFrameAlt from "../../../reusables/Cards/JourneyCardFrameAlt";
import Doctor from '../../../assets/media/illustrations/doctor-resting-on-book-stacks-on-floor.png'
import useThemeStore from "../../../hooks/stores/useThemeStore";


export default function TechJourneySwiper() {
    const { primary, variant } = useThemeStore(state=>state.theme)
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper flex items-center justify-center aspect-square w-ninetyPercent"
      >
        <SwiperSlide className="flex items-center justify-center rounded-lg border border-brandGray1x bg-brandPurple1x/30"><SectionHeader /></SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <img src={Designer} alt={'Designer'} className='w-fiftyPercent' />
        </SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <JourneyCardFrameAlt img={Designer} altText={'Designer'} moreClasses={'m-auto w-ninetyPercent'} padding={'p-0'} >
                <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x text-center'>Colors and boxes and components</h3>
            </JourneyCardFrameAlt>
        </SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <img src={Group} alt={'Group'} className='w-fiftyPercent' />
        </SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <JourneyCardFrameAlt img={Group} altText={'Group'} header={'Got into Zuri Internship'} moreClasses={'m-auto w-ninetyPercent'} padding={'p-0'} >
                <ul>
                    <li><h3 className='text-sm md:text-base lg:text-xl text-center text-brandPurple1x'>Switched to Frontend development</h3></li>
                </ul>
            </JourneyCardFrameAlt>
        </SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <img src={Doctor} alt={'Doctor'} className='w-fiftyPercent' />
        </SwiperSlide>
        <SwiperSlide className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
            <JourneyCardFrameAlt img={Doctor} altText={'Doctor'} header={'Back to school'} moreClasses={'m-auto w-ninetyPercent'} padding={'p-0'} >
                <ul>
                    <li><h3 className='text-sm md:text-base lg:text-xl text-center text-brandPurple1x'>Optometry called</h3></li>
                </ul>
            </JourneyCardFrameAlt>
        </SwiperSlide>
        
        <SwiperSlide className="flex items-center justify-center rounded-lg border border-brandGray1x bg-brandPurple1x px-5"><SectionHeader highLightBorderColor={'border-b-white'} textSpan={'THE BEST'} remText={' IS YET TO COME...'} /></SwiperSlide>
      </Swiper>
    </>
  );
}
