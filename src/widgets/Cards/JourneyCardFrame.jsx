import React from 'react'
import { motion } from 'framer-motion'

const JourneyCardFrame = ({ img, altText, padding, header, children, moreClasses }) => {

      const listingCards = {
    slideDown: { 
        opacity: 0,
        y:120
        },
    slideUp: { 
        opacity: 1, 
        y:0,
        transition: {
        type: "spring",
        bounce: 0,
        duration:2,
        }
        },
}

  return (
    <motion.div variants={listingCards} initial="slideDown" whileInView="slideUp" viewport={{once:false, amount:0}} className={`col-span-1 ${padding || 'pr-10 pl-5 py-20'} ${moreClasses}`}>
        <div className='bg-white w-full rounded-lg border-16 border-brandGray1x flex flex-col py-4 items-center aspect-square px-5'>
            <div>
                <img src={img} alt={altText} className='w-12 h-12' />
            </div>
            <div className='flex flex-col items-center justify-center gap-4 w-full h-seventyPercent'>
                <h3 className='text-sm md:text-base lg:text-xl font-bold text-brandPurple1x'>{header || 'Started out with Figma'}</h3>
                {children}
            </div>
        </div>
    </motion.div>
  )
}

export default JourneyCardFrame