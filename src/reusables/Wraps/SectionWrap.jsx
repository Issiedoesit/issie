import React from 'react'

const SectionWrap = ({children, bgColor}) => {
  return (
    <div className={`px-5 sm:px-10 lg:px-20 py-10 md:py-14 ${bgColor}`}>
        {children}
    </div>
  )
}

export default SectionWrap