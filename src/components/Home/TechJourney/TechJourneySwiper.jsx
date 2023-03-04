import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import SectionHeader from "../../../reusables/Text/Headers/SectionHeader";
import JourneyCardFrameAlt from "../../../reusables/Cards/JourneyCardFrameAlt";
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
