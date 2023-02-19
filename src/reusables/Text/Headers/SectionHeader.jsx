import React from 'react'

const SectionHeader = ({highLightBorderColor, remText, textSpan, flexDirection}) => {
  return (
    <div className='text-center text-2xl md:text-4xl lg:text-6xl font-bold'>
        <div className={`py-2 flex flex-wrap ${flexDirection} w-full justify-center gap-2 md:gap-3 lg:gap-4`}><span className={`border-b-4 ${highLightBorderColor || 'border-b-brandPurple1x'}`}>{textSpan || 'My TECH'}</span> {remText || 'Journey'}</div>
    </div>
  )
}

export default SectionHeader