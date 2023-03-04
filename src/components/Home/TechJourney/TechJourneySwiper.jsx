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
import Flying from '../../../assets/media/illustrations/flying-black-businesswoman.png'
import Collaboration from '../../../assets/media/illustrations/woman-in-online-meetings.png'
import Working from '../../../assets/media/illustrations/young-people-discussing-team-project-at-a-laptop.png'
import Hopeful from '../../../assets/media/illustrations/young-woman-working-at-the-table.png'
import useThemeStore from "../../../hooks/stores/useThemeStore";
import Journey from "../../../data/Journey";


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
        
        {Journey.map((stop, i)=>{
            return <>
                <SwiperSlide key={i} className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
                    <img src={stop.img} alt={stop.name} className='w-fiftyPercent' />
                </SwiperSlide>
                <SwiperSlide key={'frame'+i} className={`flex items-center justify-center rounded-lg ${variant == 'light' ? 'bg-brandGray1x' : 'bg-white'}`}>
                    <JourneyCardFrameAlt img={stop.img} altText={stop.name} header={stop.header} moreClasses={'m-auto w-ninetyPercent'} padding={'p-0'} >
                        <h3 className='text-sm md:text-base lg:text-xl text-brandPurple1x text-center'>{stop.info}</h3>
                    </JourneyCardFrameAlt>
                </SwiperSlide>
            </>
        })}
        
        <SwiperSlide className="flex items-center justify-center rounded-lg border border-brandGray1x bg-brandPurple1x px-5"><SectionHeader highLightBorderColor={'border-b-white'} textSpan={'THE BEST'} remText={' IS YET TO COME...'} /></SwiperSlide>
      </Swiper>
    </>
  );
}
