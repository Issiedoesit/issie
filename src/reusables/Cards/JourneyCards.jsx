import React from 'react'

const JourneyCards = ({ children }) => {
  return (
    <div className='grid grid-cols-2 divide-x relative'>
        {children}
        <div className='h-8 w-8 bg-brandOrange1x rounded-fiftyPercent absolute top-0 left-fiftyPercent -translate-x-fiftyPercent'></div>
    </div>
  )
}

export default JourneyCards