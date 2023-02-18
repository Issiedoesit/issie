import { motion } from 'framer-motion'
import React from 'react'


const JourneyCardImg = ({img, altText}) => {

    const listingCards = {
        slideDown: { 
            opacity: 0,
            y:100
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
    <div className='col-span-1 pl-10 pr-5 py-5'>
        <motion.img variants={listingCards} initial="slideDown" whileInView="slideUp" viewport={{once:false, amount:0}} src={img} alt={altText} className="" />
    </div>
  )
}

export default JourneyCardImg