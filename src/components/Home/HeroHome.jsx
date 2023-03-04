import React, { useEffect, useRef } from 'react'
import SectionWrap from '../../reusables/Wraps/SectionWrap'
import MyPic from '../../assets/media/images/Issie-no-bg.png'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';
import SocialLinks from '../../reusables/SocialLinks';
import useThemeStore from '../../hooks/stores/useThemeStore';


const HeroHome = () => {

    function handleIntersection(isVisible) {
        const childElement = document.querySelector('#floatingLinks');
        if (isVisible) {
          childElement.style.display = 'none';
        } else {
          childElement.style.display = 'flex';
        }
      }
    

    //   const { heroRef, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //   });

    const {variant} = useThemeStore(state=>state.theme)


  return (
    <InView onChange={handleIntersection}>
        <SectionWrap id={'hero'}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10'>
                <div className='col-span-1 flex flex-col justify-center gap-6'>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl'>Hi, Welcome to my <span className="text-brandOrange1x font-bold">world.</span></h2>
                    <h3 className='text-lg md:text-2xl lg:text-4xl'>My name is <span className='text-brandPurple1x font-bold'>Isioma Ekwemuka</span></h3>
                    <h3 className='text-sm md:text-base lg:text-xl'>Frontend Dev By Day and Night and Every Moment</h3>
                    <SocialLinks />
                </div>
                <div className='col-span-1 w-full relative'>
                    <div className='w-full flex '>
                        <svg className='w-full h-550' width="824" height="1136" viewBox="0 0 824 1136" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M159.008 530.972C134.568 579.346 123.388 633.462 126.479 688.423C129.571 743.384 146.836 797.457 176.714 845.748C206.591 894.04 248.138 935.027 297.595 965.001C347.052 994.976 402.859 1012.99 459.967 1017.42L469.616 687.901L159.008 530.972Z" fill="#6C3883" fill-opacity="0.33"/>
                            <path d="M153.008 390.972C128.568 439.346 117.388 493.462 120.479 548.423C123.571 603.384 140.836 657.457 170.714 705.748C200.591 754.04 242.138 795.027 291.595 825.001C341.052 854.976 396.859 872.992 453.967 877.419L463.616 547.901L153.008 390.972Z" fill="#6C3883" fill-opacity="0.33"/>
                            <path d="M147.008 250.972C122.568 299.346 111.388 353.462 114.479 408.423C117.571 463.384 134.836 517.457 164.714 565.748C194.591 614.04 236.138 655.027 285.595 685.001C335.052 714.976 390.859 732.991 447.967 737.419L457.616 407.901L147.008 250.972Z" fill="#6C3883" fill-opacity="0.33"/>
                            <path d="M453.654 1021.29C507.794 1023.78 561.745 1011.83 610.625 986.516C659.506 961.199 701.773 923.312 733.604 876.286C765.436 829.259 785.825 774.575 792.93 717.181C800.034 659.788 793.628 601.496 774.291 547.579L469.693 673.656L453.654 1021.29Z" fill="#CD6613" fill-opacity="0.44"/>
                            <path d="M467.654 891.286C521.794 893.784 575.745 881.834 624.625 856.516C673.506 831.199 715.773 793.312 747.604 746.286C779.436 699.259 799.825 644.575 806.93 587.181C814.034 529.788 807.628 471.496 788.291 417.579L483.693 543.656L467.654 891.286Z" fill="#CD6613" fill-opacity="0.44"/>
                            <path d="M481.654 761.286C535.794 763.784 589.745 751.834 638.625 726.516C687.506 701.199 729.773 663.312 761.604 616.286C793.436 569.259 813.825 514.575 820.93 457.181C828.034 399.788 821.628 341.496 802.291 287.579L497.693 413.656L481.654 761.286Z" fill="#CD6613" fill-opacity="0.44"/>
                        </svg>
                    </div>
                    <div className='absolute top-fiftyPercent -translate-y-fiftyPercent -translate-x-fiftyPercent left-fiftyPercent'>
                        <img src={MyPic} alt="Isioma" className='h-full w-full' />
                    </div>
                </div>
            </div>
        </SectionWrap>
        <SocialLinks id={'floatingLinks'} altStyling={`${variant == 'light' ? 'bg-black' : 'bg-white'} px-2 py-2 rounded-md shadow-md fixed left-0 z-20 top-fiftyPercent -translate-y-fiftyPercent flex flex-col items-center gap-4`} />
    </InView>
  )
}

export default HeroHome