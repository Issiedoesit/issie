import React from 'react'

const SectionHeader = ({highLightBorderColor, remText, textSpan}) => {
  return (
    <div className='text-center text-2xl md:text-4xl lg:text-6xl font-bold'>
        <h2 className='py-2'><span className={`border-b-4 ${highLightBorderColor || 'border-b-brandPurple1x'}`}>{textSpan || 'My TECH'}</span> {remText || 'Journey'}</h2>
    </div>
  )
}

export default SectionHeader